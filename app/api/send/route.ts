import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// यहाँ अपनी असली API Key डालें
const resend = new Resend('re_j5hiHNEZ_M3ob4EnuB3wMjQ9aAQYyjnSx'); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, class: className, fatherName, phoneNumber, email } = body;

    // 1. स्कूल (Admin) को मेल भेजने का कोड
    const adminEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['manishunichem@gmail.com'], // यहाँ अपनी आईडी रखें
      subject: `New Admission Inquiry - ${studentName}`,
      html: `
        <h2>New Admission Request</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Class:</strong> ${className}</p>
        <p><strong>Parent's Name:</strong> ${fatherName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    // 2. पेरेंट्स को 'Thank You' (Auto-reply) भेजने का कोड
    const parentEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email], // यह फॉर्म में भरा गया पेरेंट्स का ईमेल उठाएगा
      subject: `Thank you for your inquiry, ${fatherName}`,
      html: `
        <h2>Thank You for Contacting Cecil Convent School!</h2>
        <p>Dear ${fatherName},</p>
        <p>We have received your admission inquiry for <strong>${studentName}</strong> (Class: ${className}).</p>
        <p>Our admission team will contact you shortly at ${phoneNumber} to guide you through the next steps.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>Cecil Convent School Team</strong></p>
      `
    });

    return NextResponse.json({ success: true, adminEmail, parentEmail });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}