// ═══════════════════════════════════════════════════════════
// FILE 1: app/page.tsx
// ═══════════════════════════════════════════════════════════

import { Metadata } from 'next';
import Portfolio from '../components/Portfolio';

export const metadata: Metadata = {
  title: 'Ethan Knorring | Full-Stack Developer & Computer Science Student',
  description: 'Portfolio of Ethan Knorring - Computer Science student at WPI specializing in Next.js, TypeScript, and full-stack development. Experienced in building accessible, high-performance web applications.',
  keywords: ['Ethan Knorring', 'Full-Stack Developer', 'Computer Science', 'WPI', 'Next.js', 'TypeScript', 'React', 'Web Development'],
  authors: [{ name: 'Ethan Knorring' }],
  creator: 'Ethan Knorring',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethanknorring.com',
    title: 'Ethan Knorring | Full-Stack Developer',
    description: 'Portfolio showcasing web development projects and experience in Next.js, TypeScript, and accessible web design.',
    siteName: 'Ethan Knorring Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Knorring | Full-Stack Developer',
    description: 'Portfolio showcasing web development projects and experience',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return <Portfolio />;
}