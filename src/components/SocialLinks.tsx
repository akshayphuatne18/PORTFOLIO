import React from 'react';
import { socialLinks } from '../config/social';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            className="text-text-base hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <Icon size={24} className="hover:animate-float" />
          </a>
        );
      })}
    </div>
  );
}