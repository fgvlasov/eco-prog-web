import { FormData } from '@/components/Contacts'; // Ensure this is your custom type or interface

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const response = await res.json();
    console.log(response.message);
  } catch (err) {
    console.log(`Failed to send email: ${err.message}`);
  }
}
