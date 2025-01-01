import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import type { SocialLink } from '../types/social';

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/akshayphuatne18',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/akshay-phutane-274407276/',
    label: 'LinkedIn'
  },
  {
    icon: Code2,
    href: 'https://leetcode.com/u/akshay_phutane_18/',
    label: 'LeetCode'
  },
  {
    icon: Mail,
    href: 'mailto:akshayphutane8@gmail.com',
    label: 'Email'
  }
];