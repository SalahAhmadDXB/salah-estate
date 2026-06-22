import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM ?? 'notifications@resend.dev';
const TO = 'salah@uniqueproperties.ae';

export async function POST(req: NextRequest) {
  try {
    const { name, budget, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    const htmlBody = `
      <div style="font-family:sans-serif;max-width:520px;background:#0c0c0e;color:#f2eee6;padding:40px;border-radius:8px">
        <h2 style="font-size:22px;font-weight:300;color:#e8d29a;margin:0 0 24px">New enquiry via Salah Private Estates</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.15);font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8e897c;width:40%">Name</td><td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.15);font-size:15px;color:#f2eee6">${name}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.15);font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8e897c">Budget</td><td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.15);font-size:15px;color:#f2eee6">${budget || '—'}</td></tr>
          <tr><td style="padding:12px 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8e897c;vertical-align:top;padding-top:16px">Message</td><td style="padding:12px 0;font-size:15px;color:#f2eee6;line-height:1.6;padding-top:16px">${message}</td></tr>
        </table>
        <div style="margin-top:32px;padding:16px;background:rgba(201,162,75,0.08);border-radius:4px">
          <p style="font-size:12px;color:#8e897c;margin:0">Reply directly to this email or reach out via WhatsApp: <a href="https://wa.me/971523243294" style="color:#c9a24b;text-decoration:none">+971 52 324 3294</a></p>
        </div>
      </div>
    `;

    if (!RESEND_API_KEY) {
      console.info('[contact] No RESEND_API_KEY — logging enquiry to console instead');
      console.info({ name, budget, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [TO],
        subject: `New Dubai property enquiry from ${name}`,
        html: htmlBody,
        reply_to: undefined,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[contact] Resend error:', err);
      return NextResponse.json({ error: 'Email delivery failed.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
