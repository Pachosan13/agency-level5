import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agencylevel5.com'),
};

// Root layout is a pass-through — <html lang> and <body> are in [locale]/layout.tsx
// so each locale gets the correct lang attribute for SEO (C9)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
