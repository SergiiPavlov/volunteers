import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volontery',
  description: 'Volunteer opportunities platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
