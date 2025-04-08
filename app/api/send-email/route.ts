import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    const response = await resend.emails.send({
      from: "Eden's Auto Detailing <info@edensautodetailing.nl>",
      to: 'delanogarciaillera@gmail.com',
      subject: `Nieuw contactformulier van ${name}`,
      html: `
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoonnummer:</strong> ${phone}</p>
        <p><strong>Gewenste service:</strong> ${service}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
