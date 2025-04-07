'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  name: string,
  email: string,
  phone: string,
  service: string,
  message: string,
) {
  try {
    const response = await resend.emails.send({
      from: "Eden's Auto Detailing <info@edensautodetailing.nl>",
      to: 'info@edensautodetailing.nl',
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

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
}
