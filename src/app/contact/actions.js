'use server';

import { redirect } from "next/dist/server/api-utils";

// useActionState przekazuje DWA argumenty: poprzedni stan i dane formularza
export async function submitContact(prevState, formData) {
  const email = formData.get('email');

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Podaj poprawny adres e-mail.' };
  }

  return { success: true, message: 'Dziękujemy za zgłoszenie!' };

  redirect('/contact/dziekujemy')
}
