import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}