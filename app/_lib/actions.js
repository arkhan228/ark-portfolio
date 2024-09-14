'use server';

import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import EmailTemplate from '@/app/_components/EmailTemplate';

export async function contactAction(formData) {
  const updatedData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'arkhan@resend.dev',
      to: 'ark573235@gmail.com',
      subject: updatedData.subject,
      react: EmailTemplate(updatedData),
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Message could not be sent!');
  }

  redirect('/contact/thankyou');
}
