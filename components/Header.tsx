'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, Locale } from '@/lib/i18n/locales';
import { dict } from '@/messages';

type Props = { locale: Locale };

export default function Header({ locale }: Props) {
  const t = dict[locale] as any;
  const pathname = usePathname();

  const switchTo = (l: Locale) => {
    if (!pathname) return `/${l}`;
    const parts = pathname.split('/');
    parts[1] = l;
    return parts.join('/') || `/${l}`;
  };

  return (
    <header className="border-b border-neutral-100 bg-white sticky top-0 z-20">
      <div className="container flex items-center justify-between h-14">
        <Link href={`/${locale}`} className="font-heading text-lg">
          {t.brand}
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href={`/${locale}/opportunities`} className="hover:text-primary">{t.nav.opportunities}</Link>
          <Link href={`/${locale}/blog`} className="hover:text-primary">{t.nav.blog}</Link>
          <Link href={`/${locale}/learn`} className="hover:text-primary">Learn</Link>
          <Link href={`/${locale}/about`} className="hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/donate`} className="hover:text-primary">{t.nav.donate}</Link>
          <Link href={`/${locale}/contact`} className="hover:text-primary">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={`/${locale}/opportunities`} className="btn btn-primary text-sm">{t.ctaVolunteer}</Link>
          <select
            aria-label="Language"
            defaultValue={locale}
            onChange={(e) => { window.location.assign(switchTo(e.target.value as Locale)); }}
            className="border rounded-md h-9 px-2"
          >
            {locales.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
    </header>
  );
}
