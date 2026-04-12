import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const region = formData.get('region') as string;
    const file = formData.get('file') as File;

    let transporter;
    
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

    const attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"B2B Rentals" <noreply@b2brentals.com>',
      to: process.env.QUOTE_INBOX_EMAIL || 'hariharans23cs@psnacet.edu.in',
      subject: `New Job Application from ${fullName}`,
      text: `
        A new career application has been received.

        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Region: ${region}
      `,
      html: `
        <h2>New Career Application</h2>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Region:</strong> ${region}</li>
        </ul>
        <p>The applicant's resume is attached to this email.</p>
      `,
      attachments
    };

    const info = await transporter.sendMail(mailOptions);

    if (!process.env.SMTP_HOST) {
       console.log('\n--- ✉️ Test Career Application Email Processed ---');
       console.log(`[Admin Inbox Copy]: ${nodemailer.getTestMessageUrl(info)}`);
       console.log('---------------------------------------\n');
    }
    
    return NextResponse.json({ success: true, message: 'Application submitted successfully.' }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
