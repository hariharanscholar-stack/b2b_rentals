import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();

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
      // Create a test account dynamically for local development
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"B2B Rentals" <noreply@b2brentals.com>',
      to: process.env.QUOTE_INBOX_EMAIL || 'haricnp9@gmail.com',
      subject: `New Equipment Quote Request from ${data.firstName} ${data.lastName}`,
      text: `
        A new quote request has been received.

        Product: ${data.productName}
        Tonnage: ${data.tonnage || 'N/A'}
        
        Customer Details:
        Name: ${data.firstName} ${data.lastName}
        Mobile: ${data.mobile}
        Email: ${data.email}
        City: ${data.city}
        Pin Code: ${data.pinCode}
        Organisation: ${data.organisation}
        Job Function: ${data.jobFunction}
        
        Message:
        ${data.message || 'No specific message provided.'}
      `,
      html: `
        <h2>New Equipment Quote Request</h2>
        <p><strong>Product:</strong> ${data.productName}</p>
        <p><strong>Tonnage:</strong> ${data.tonnage || 'N/A'}</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Mobile:</strong> ${data.mobile}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>City:</strong> ${data.city}</li>
          <li><strong>Pin Code:</strong> ${data.pinCode}</li>
          <li><strong>Organisation:</strong> ${data.organisation}</li>
          <li><strong>Job Function:</strong> ${data.jobFunction}</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${data.message ? data.message.replace(/\n/g, '<br>') : 'No specific message provided.'}</p>
      `
    };

    const customerMailOptions = {
      from: process.env.SMTP_FROM || '"B2B Rentals" <noreply@b2brentals.com>',
      to: data.email,
      subject: `Confirmation: We've received your quote request`,
      text: `Hi ${data.firstName},\n\nThank you for requesting a quote for the ${data.productName} ${data.tonnage ? `(${data.tonnage} tonne)` : ''}.\n\nOur team is reviewing your requirements and will get back to you shortly.\n\nBest regards,\nThe B2B Rentals Team`,
      html: `
        <p>Hi ${data.firstName},</p>
        <p>Thank you for requesting a quote for the <strong>${data.productName} ${data.tonnage ? `(${data.tonnage} tonne)` : ''}</strong>.</p>
        <p>Our team is reviewing your requirements and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>The B2B Rentals Team</p>
      `
    };

    // 1. Save to Database
    const quote = await prisma.quote.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        organisation: data.organisation,
        jobFunction: data.jobFunction,
        city: data.city,
        pinCode: data.pinCode,
        productName: data.productName,
        tonnage: data.tonnage,
        message: data.message,
      },
    });

    console.log(`[DB]: Saved quote request from ${data.firstName} with ID: ${quote.id}`);

    const infoSales = await transporter.sendMail(mailOptions);
    const infoCustomer = await transporter.sendMail(customerMailOptions);

    if (!process.env.SMTP_HOST) {
       console.log('\n--- ✉️ Test Emails Processed Successfully ---');
       console.log(`[Sales Inbox Copy]: ${nodemailer.getTestMessageUrl(infoSales)}`);
       console.log(`[Customer Copy]: ${nodemailer.getTestMessageUrl(infoCustomer)}`);
       console.log('-------------------------------------------\n');
    }
    
    return NextResponse.json({ success: true, message: 'Quote requested successfully' }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { error: 'Failed to request quote. Please try again later.' },
      { status: 500 }
    );
  }
}
