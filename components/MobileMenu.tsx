'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { locales, Locale } from '@/lib/i18n/locales';
import { dict } from '@/messages';

type Props = {
  id?: string;
  locale: Locale;
  onClose: () => void;
  switchTo: (l: Locale) => string;
};

export default function MobileMenu({ id, locale, onClose, switchTo }: Props) {
  const t = dict[locale] as any;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* panel */}
      <div className="absolute inset-x-0 top-0 bg-white rounded-b-xl shadow-lg p-4 pb-6">
        <div className="flex items-center justify-between">
          <div className="font-heading text-lg">{t.brand}</div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-100"
          >
            {/* X */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="mt-4 grid gap-2 text-base">
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/opportunities`}>{t.nav.opportunities}</Link>
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/blog`}>{t.nav.blog}</Link>
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/learn`}>Learn</Link>
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/about`}>{t.nav.about}</Link>
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/donate`}>{t.nav.donate}</Link>
          <Link onClick={onClose} className="py-2 hover:text-primary" href={`/${locale}/contact`}>{t.nav.contact}</Link>
        </nav>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Link onClick={onClose} href={`/${locale}/opportunities`} className="btn btn-primary justify-center">
            {t.ctaVolunteer}
          </Link>
        </div>

        <div className="mt-4">
          <label className="block text-sm text-neutral-600 mb-1">Language</label>
          <select
            aria-label="Language"
            defaultValue={locale}
            onChange={(e) => { window.location.assign(switchTo(e.target.value as Locale)); }}
            className="border rounded-md h-10 px-2 w-full"
          >
            {locales.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
