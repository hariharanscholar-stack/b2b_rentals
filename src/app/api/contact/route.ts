import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    let transporter;
    
    // Create the standard transporter just like we do for quotes
    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.user, 
          pass: testAccount.pass, 
        },
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"B2B Rentals" <noreply@b2brentals.com>',
      to: process.env.QUOTE_INBOX_EMAIL || 'hariharans23cs@psnacet.edu.in', // Admin email
      subject: `New Contact Form Submission from ${data.fullName}`,
      text: `
        A new contact enquiry has been received.

        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Region: ${data.region}
        Company: ${data.company}
        Industry: ${data.industry}
        
        Enquiry:
        ${data.enquiry}
      `,
      html: `
        <h2>New Contact Enquiry</h2>
        <ul>
          <li><strong>Name:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Region:</strong> ${data.region}</li>
          <li><strong>Company:</strong> ${data.company}</li>
          <li><strong>Industry:</strong> ${data.industry}</li>
        </ul>
        
        <h3>Enquiry Details:</h3>
        <p>${data.enquiry.replace(/\n/g, '<br>')}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    if (!process.env.SMTP_HOST) {
       console.log('\n--- ✉️ Test Contact Email Processed ---');
       console.log(`[Admin Inbox Copy]: ${nodemailer.getTestMessageUrl(info)}`);
       console.log('---------------------------------------\n');
    }
    
    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
