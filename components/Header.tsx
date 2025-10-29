'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, Locale } from '@/lib/i18n/locales';
import { dict } from '@/messages';
import MobileMenu from '@/components/MobileMenu';

type Props = { locale: Locale };

export default function Header({ locale }: Props) {
  const t = dict[locale] as any;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchTo = (l: Locale) => {
    if (!pathname) return `/${l}`;
    const parts = pathname.split('/');
    parts[1] = l;
    return parts.join('/') || `/${l}`;
  };

  return (
    <header className="border-b border-neutral-100 bg-white sticky top-0 z-30">
      <div className="container flex items-center justify-between h-14">
        <Link href={`/${locale}`} className="font-heading text-lg">
          {t.brand}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href={`/${locale}/opportunities`} className="hover:text-primary">{t.nav.opportunities}</Link>
          <Link href={`/${locale}/blog`} className="hover:text-primary">{t.nav.blog}</Link>
          <Link href={`/${locale}/learn`} className="hover:text-primary">Learn</Link>
          <Link href={`/${locale}/about`} className="hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/donate`} className="hover:text-primary">{t.nav.donate}</Link>
          <Link href={`/${locale}/contact`} className="hover:text-primary">{t.nav.contact}</Link>
        </nav>

        {/* Desktop CTAs + Lang */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Mobile controls: language select stays in header + burger */}
        <div className="md:hidden flex items-center gap-2">
          <select
            aria-label="Language"
            defaultValue={locale}
            onChange={(e) => { window.location.assign(switchTo(e.target.value as Locale)); }}
            className="border rounded-md h-9 px-2"
          >
            {locales.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <button
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100"
          >
            {/* burger */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {open && (
        <MobileMenu
          id="mobile-menu"
          locale={locale}
          onClose={() => setOpen(false)}
          switchTo={switchTo}
        />
      )}
    </header>
  );
}
