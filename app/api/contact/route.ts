import { NextRequest, NextResponse } from 'next/server';
import { storeLead, type LeadData } from '@/lib/storeLead';
import { sendLeadEmail } from '@/lib/sendLeadEmail';

function validateLead(data: unknown): data is LeadData {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as any).name === 'string' &&
    typeof (data as any).company === 'string' &&
    typeof (data as any).phone === 'string' &&
    typeof (data as any).location === 'string' &&
    typeof (data as any).service === 'string'
  );
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!validateLead(data)) {
      return NextResponse.json({ success: false, message: 'Invalid lead data.' }, { status: 400 });
    }

    const savedLead = await storeLead(data);
    await sendLeadEmail(savedLead);

    return NextResponse.json({ success: true, message: 'Lead captured successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ success: false, message: 'Unable to save lead. Check email and storage configuration.' }, { status: 500 });
  }
}
