'use client';

import React from "react";
import { useState } from 'react';

const initialState = {
  company: '',
  name: '',
  phone: '',
  email: '',
  location: '',
  service: 'Site inspection',
  message: '',
};

const serviceOptions = [
  'Site inspection',
  'Fire safety system',
  'Gas pipeline system',
  'AMC contract',
  'Fabrication / ventilation',
  'Welding equipment',
];

export function LeadForm({ defaultHeading = 'Request Site Inspection' }: { defaultHeading?: string }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData(initialState);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const whatsappUrl = `https://wa.me/919837476323?text=${encodeURIComponent(
    `Hi, I need a site inspection for ${formData.service}`
  )}`;

  return (
<div className="rounded-xl border border-border bg-white p-8 shadow-card">
      <h2 className="text-2xl font-semibold text-primary">{defaultHeading}</h2>
      <p className="mt-3 text-sm leading-7 text-neutral">
        Submit a short lead request and our Haridwar engineering team will contact you with a site-level inspection plan.
      </p>
      <p className="mt-2 text-sm font-semibold text-primary">Our engineer will contact you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company name"
            className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone / WhatsApp"
            className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
          />
        </div>
        <label className="sr-only" htmlFor="service">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Project location"
          className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Message"
          className="resize-none rounded-lg border border-border bg-surface px-4 py-4 text-base text-primary outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Request'}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-white px-6 py-4 text-base font-semibold text-primary"
        >
          Contact on WhatsApp
        </a>

        <div className="rounded-lg bg-surface px-4 py-3 text-sm text-neutral">
          {status === 'success' ? (
            <p className="font-semibold text-primary">Your request has been submitted successfully. Our engineer will contact you within 24 hours.</p>
          ) : status === 'error' ? (
            <p className="font-semibold text-red-600">Unable to send request. Please try again or contact us on WhatsApp.</p>
          ) : (
            <p>We only use this information to schedule your inspection and scope the service properly.</p>
          )}
        </div>
      </form>
    </div>
  );
}
