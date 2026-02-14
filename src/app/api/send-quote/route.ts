import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Origin team
    const { data, error } = await resend.emails.send({
      from: 'Origin Contact Form <onboarding@resend.dev>',
      to: ['muigastephen14@gmail.com'],
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://origin.co.ke/logo.png" alt="Origin Logo" style="height: 40px; margin-bottom: 10px;">
              <h1 style="color: #1e293b; margin: 0; font-size: 24px;">New Contact Message</h1>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${company}</p>` : ''}
              ${phone ? `<p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> ${phone}</p>` : ''}
            </div>

            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
              <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was submitted through the Origin website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the client
    await resend.emails.send({
      from: 'Origin Team <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for reaching out - Origin',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://origin.co.ke/logo.png" alt="Origin Logo" style="height: 40px; margin-bottom: 10px;">
              <h1 style="color: #1e293b; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
               <p style="margin: 0; color: #1e40af; font-size: 16px; font-weight: 500;">
                We've received your message and will get back to you within 24 hours.
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h2>
              <ul style="color: #475569; line-height: 1.6; padding-left: 20px;">
                <li>Our team will review your message</li>
                <li>We'll get back to you with any follow-up questions</li>
                <li>We'll schedule a call to discuss things in detail</li>
              </ul>
            </div>

            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">Need immediate assistance?</h3>
              <p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> +254 768 519 115</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> info@origin.co.ke</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Best regards,<br>
                The Origin Team
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
