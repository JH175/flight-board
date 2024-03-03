import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';

const maven = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'flightboard',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={maven.className}>{children}</body>
    </html>
  );
}
