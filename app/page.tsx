
import { Metadata } from 'next';
import Portfolio from '../components/Portfolio';

export const metadata: Metadata = {
  title: 'Ethan Knorring | Full-Stack Developer, IT Intern, CS Graduate',
  description: 'Portfolio of Ethan Knorring - WPI Computer Science graduate with experience in full-stack development, accessibility engineering, IT operations, and security-focused tooling.',
  keywords: ['Ethan Knorring', 'Full-Stack Developer', 'IT Intern', 'Computer Science', 'WPI', 'Next.js', 'TypeScript', 'Accessibility', 'Security'],
  authors: [{ name: 'Ethan Knorring' }],
  creator: 'Ethan Knorring',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethanknorring.com',
    title: 'Ethan Knorring | Full-Stack Developer and IT Intern',
    description: 'Portfolio showcasing full-stack projects, WCAG-compliant accessibility work, and IT/security experience.',
    siteName: 'Ethan Knorring Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Knorring | Full-Stack Developer and IT Intern',
    description: 'Portfolio showcasing full-stack, accessibility, and IT/security experience',
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