import React from 'react';
import { Mail } from 'lucide-react';
import { PageHero } from '../shared/PageHero';

export function ContactHero() {
  return (
    <PageHero
      icon={Mail}
      title="Get in Touch"
      description="Have questions about BOSS Entrepreneurship? We'd love to hear from you!"
      gradientFrom="green-600"
      gradientTo="blue-600"
    />
  );
}
