import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, locales, isLocale, defaultLocale } from '@/lib/i18n/locales';

export const metadata: Metadata = {
  title: 'Volontery — Volunteer Platform',
  description: 'Find volunteer opportunities near you or online.',
};

export async function generateStaticParams() {
  return (locales as readonly string[]).map(l => ({ locale: l }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale;
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <main className="container py-8">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
