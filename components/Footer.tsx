import { Locale } from '@/lib/i18n/locales';
import { dict } from '@/messages';
import Link from 'next/link';

export default function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale] as any;
  return (
    <footer className="mt-16 border-t border-neutral-100">
      <div className="container py-10 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {t.brand}. {t.footerRights}.</p>
        <div className="flex gap-4">
          <Link href={`/${locale}/privacy`} className="hover:text-neutral-900">Privacy</Link>
          <Link href={`/${locale}/terms`} className="hover:text-neutral-900">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
