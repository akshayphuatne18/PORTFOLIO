import React from 'react';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Akshay Phutane. All rights reserved.</p>
          <SocialLinks className="mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
}