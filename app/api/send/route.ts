import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// यहाँ अपनी असली Resend API Key डालें (jo re_ se shuru hoti hai)
const resend = new Resend('re_WPSDjw3g_8LUQJ2yDhyXJaU7FvjpWX894'); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, class: className, fatherName, phoneNumber, email } = body;

    // स्कूल को एडमिशन फॉर्म की डिटेल्स भेजना
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // अभी के लिए इसे ऐसे ही रहने दें
      to: ['attri.anjali86@gmail.com'], // आपके स्कूल की ईमेल आईडी
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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}