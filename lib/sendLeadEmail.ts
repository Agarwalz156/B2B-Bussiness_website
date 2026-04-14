import nodemailer from 'nodemailer';
import type { LeadData } from '@/lib/storeLead';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const LEAD_EMAIL_TO = process.env.LEAD_EMAIL_TO;
const LEAD_EMAIL_FROM = process.env.LEAD_EMAIL_FROM || SMTP_USER;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_EMAIL_TO) {
  console.warn('Mail configuration is incomplete. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and LEAD_EMAIL_TO.');
}

function buildLeadMessage(lead: LeadData) {
  const lines = [
    'New lead capture from Four Way Engineers',
    '---------------------------------------',
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || 'N/A'}`,
    `Service: ${lead.service}`,
    `Location: ${lead.location}`,
    `Message: ${lead.message || 'N/A'}`,
    `Submitted: ${lead.submittedAt}`,
  ];

  return lines.join('\n');
}

export async function sendLeadEmail(lead: LeadData) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEAD_EMAIL_TO) {
    throw new Error('Email configuration is missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASS, and LEAD_EMAIL_TO.');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const text = buildLeadMessage(lead);
  const html = `
    <div style="font-family: system-ui, sans-serif;">
      <h2>New lead capture from Four Way Engineers</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Company:</strong> ${lead.company}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Email:</strong> ${lead.email || 'N/A'}</p>
      <p><strong>Service:</strong> ${lead.service}</p>
      <p><strong>Location:</strong> ${lead.location}</p>
      <p><strong>Message:</strong> ${lead.message || 'N/A'}</p>
      <p><strong>Submitted:</strong> ${lead.submittedAt}</p>
    </div>
  `;

  await transporter.sendMail({
    from: LEAD_EMAIL_FROM,
    to: LEAD_EMAIL_TO,
    subject: `New lead request: ${lead.service}`,
    text,
    html,
  });
}
