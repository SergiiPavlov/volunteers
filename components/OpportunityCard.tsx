import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/locales';

export type Opportunity = {
  slug: string;
  title: string;
  org: string;
  city?: string;
  online?: boolean;
  dates?: string;
  imgSeed: string;
  urgent?: boolean;
}

export default function OpportunityCard({ item, locale }: { item: Opportunity; locale: Locale }) {
  const imgUrl = `https://picsum.photos/seed/${encodeURIComponent(item.imgSeed)}/640/360`;
  return (
    <div className="card overflow-hidden">
      <div className="relative w-full h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgUrl} alt={item.title} className="w-full h-full object-cover" />
        {item.urgent && <span className="absolute top-2 left-2 bg-danger text-white text-xs px-2 py-1 rounded-md">Urgent</span>}
        {item.online && <span className="absolute top-2 right-2 bg-neutral-900 text-white text-xs px-2 py-1 rounded-md">Online</span>}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-neutral-500">{item.org} • {item.city || '—'}</p>
        <p className="text-sm text-neutral-500">{item.dates || ''}</p>
        <div className="mt-3">
          <Link href={`/${locale}/opportunities/${item.slug}`} className="btn btn-secondary">Подробнее</Link>
        </div>
      </div>
    </div>
  )
}
