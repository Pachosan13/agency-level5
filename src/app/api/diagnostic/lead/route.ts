import { NextRequest, NextResponse } from 'next/server';

const GHL_API = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const LOCATION_ID = 'MdobjsDECDbuVlc0m99p';

const CF_BOTTLENECK_SCORE = 'W2ZaBVx7I0ggX2QfTfP0';
const CF_MATURITY_LEVEL = 'zn9sRcLrIQRbcO2EzXbP';
const CF_PILLAR_VISIBILITY = 'FaYke2S0mGopMDAcrocP';
const CF_PILLAR_PROCESS = 'tAufRGEE9gYcTcKLuvHH';
const CF_PILLAR_EXECUTION = 'CnceGmBmk1BfA97iaaPT';
const CF_PILLAR_APPROVALS = 'UFs9Vf9EkkGgQUwIXAX9';
const CF_PILLAR_REPORTING = 'tCm2NijqiPqwbvRgaVOW';
const CF_TOP_BOTTLENECK = 'WDKxjcqEgVguwkarORP7';
const CF_RECOMMENDATION = 'oaOKy60o4m5vcBD1mdNI';

const MATURITY_MAP: Record<string, string> = {
  fragile: 'Fragile',
  reactive: 'Reactive',
  functional: 'Functional but Constrained',
  strong: 'Strong Foundation',
};

export async function POST(request: NextRequest) {
  const token = process.env.GHL_LEVEL5_KEY;
  if (!token) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const body = await request.json();
  const { name, company, email, phone, results } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  const parts = name.trim().split(/\s+/);
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts.slice(1).join(' ') : '';

  const customFields: Array<{ id: string; value: string | number }> = [];

  if (results) {
    if (results.overallScore != null) {
      customFields.push({ id: CF_BOTTLENECK_SCORE, value: results.overallScore });
    }
    if (results.maturityKey) {
      customFields.push({ id: CF_MATURITY_LEVEL, value: MATURITY_MAP[results.maturityKey] || results.maturityKey });
    }
    if (results.pillarScores) {
      const pillarFieldMap: Record<string, string> = {
        visibility: CF_PILLAR_VISIBILITY,
        process: CF_PILLAR_PROCESS,
        execution: CF_PILLAR_EXECUTION,
        approvals: CF_PILLAR_APPROVALS,
        reporting: CF_PILLAR_REPORTING,
      };
      for (const ps of results.pillarScores) {
        const fieldId = pillarFieldMap[ps.pillar];
        if (fieldId) {
          customFields.push({ id: fieldId, value: ps.score });
        }
      }
    }
    if (results.topBottleneck) {
      customFields.push({ id: CF_TOP_BOTTLENECK, value: results.topBottleneck });
    }
    if (results.recommendation) {
      customFields.push({ id: CF_RECOMMENDATION, value: results.recommendation });
    }
  }

  const contactBody = {
    firstName,
    lastName,
    email,
    phone: phone || '',
    companyName: company || '',
    locationId: LOCATION_ID,
    source: 'bottleneck-diagnostic',
    tags: ['bottleneck-diagnostic', 'website-lead'],
    customFields,
  };

  try {
    const resp = await fetch(`${GHL_API}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: GHL_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactBody),
    });

    const data = await resp.json();

    if (!resp.ok) {
      console.error('GHL error:', data);
      return NextResponse.json({ error: 'Could not process request' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, contactId: data.contact?.id });
  } catch (err) {
    console.error('Fetch error:', err);
    return NextResponse.json({ error: 'Connection error' }, { status: 502 });
  }
}
