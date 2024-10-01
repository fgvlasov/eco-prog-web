'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';


export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendEmail(data);
      setSuccessMessage('Email sent successfully!');
      setErrorMessage(''); // Clear error message

      // Clear form fields after success
      reset();
    } catch (err) {
      setErrorMessage('Failed to send email. Please try again.');
      setSuccessMessage(''); // Clear success message if there's an error
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-600 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-600 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-600 focus:shadow-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-indigo-600 py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
};


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
    return response; // Return the response for further processing
  } catch (err: any) {
    throw new Error(`Failed to send email: ${err.message}`);
  }
}