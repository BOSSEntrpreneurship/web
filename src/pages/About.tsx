import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Mission } from '../components/about/Mission';
import { Team } from '../components/about/Team';

export function About() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <AboutHero />
      <Mission />
      <Team />
    </div>
  );
}