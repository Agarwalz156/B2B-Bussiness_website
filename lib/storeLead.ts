import { promises as fs } from 'fs';
import path from 'path';
import { google } from 'googleapis';

export interface LeadData {
  name: string;
  company: string;
  phone: string;
  email?: string;
  location: string;
  service: string;
  message?: string;
  submittedAt?: string;
}

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const SERVICE_ACCOUNT = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS;

const localLeadFile = path.join(process.cwd(), 'data', 'leads.json');

async function ensureLeadFolderExists() {
  const dir = path.dirname(localLeadFile);
  await fs.mkdir(dir, { recursive: true });
}

async function storeLeadLocally(lead: LeadData) {
  await ensureLeadFolderExists();

  let leads: LeadData[] = [];
  try {
    const existing = await fs.readFile(localLeadFile, 'utf8');
    leads = JSON.parse(existing) as LeadData[];
  } catch (error) {
    leads = [];
  }

  leads.push(lead);
  await fs.writeFile(localLeadFile, JSON.stringify(leads, null, 2), 'utf8');
}

function parseServiceAccount() {
  if (!SERVICE_ACCOUNT) {
    throw new Error('Google Sheets credentials are not configured. Please set GOOGLE_SERVICE_ACCOUNT_CREDENTIALS.');
  }

  try {
    return JSON.parse(SERVICE_ACCOUNT);
  } catch (error) {
    throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_CREDENTIALS; must be valid JSON.');
  }
}

async function appendLeadToSheet(lead: LeadData) {
  if (!SHEET_ID) {
    throw new Error('Google Sheets ID is missing. Set GOOGLE_SHEETS_ID.');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: parseServiceAccount(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client as any });

  const values = [
    [
      lead.submittedAt || new Date().toISOString(),
      lead.name,
      lead.company,
      lead.phone,
      lead.email || '',
      lead.service,
      lead.location,
      lead.message || '',
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Leads!A:H',
    valueInputOption: 'RAW',
    requestBody: { values },
  });
}

export async function storeLead(lead: LeadData) {
  const savedLead: LeadData = {
    ...lead,
    submittedAt: new Date().toISOString(),
  };

  if (SHEET_ID && SERVICE_ACCOUNT) {
    await appendLeadToSheet(savedLead);
  } else {
    await storeLeadLocally(savedLead);
  }

  return savedLead;
}
