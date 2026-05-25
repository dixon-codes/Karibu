import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Karibu Cottage <onboarding@resend.dev>',
      to: [process.env.MANAGEMENT_EMAIL || 'dixo52404@gmail.com'],
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #ff841a;">New Contact Form Message</h2>
          <p>You have received a new message from the Karibu Cottage website.</p>
          <hr style="border: 1px solid #E8E0D0; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #FAF8F3; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
        </div>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
