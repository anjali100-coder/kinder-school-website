import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_j5hiHNEZ_M3ob4EnuB3wMjQ9aAQYyjnSx'); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, class: className, fatherName, phoneNumber, email } = body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['attri.anjali86@gmail.com'],
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