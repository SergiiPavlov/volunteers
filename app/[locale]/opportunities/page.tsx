import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';
import { Locale } from '@/lib/i18n/locales';

function dummy(locale: Locale): Opportunity[] {
  return Array.from({ length: 9 }).map((_, i) => ({
    slug: `op-${i+1}`,
    title: ['Sorting donations', 'Park cleanup', 'Online mentoring'][i % 3],
    org: ['HelpHub', 'GreenCity', 'School+'][i % 3],
    city: ['Kyiv', 'Lviv', 'Odesa'][i % 3],
    online: i % 2 === 0,
    dates: '2025-11-12 — 2025-11-30',
    imgSeed: `${locale}-list-${i}`,
    urgent: i % 4 === 0,
  }));
}

export default function Page({ params }: { params: { locale: Locale } }) {
  const items = dummy(params.locale);
  return (
    <div className="space-y-6">
      <div className="card p-4">
        <form className="grid md:grid-cols-4 gap-3">
          <input className="border rounded-md h-10 px-3" placeholder="Город/Онлайн" />
          <select className="border rounded-md h-10 px-3"><option>Категория</option></select>
          <input className="border rounded-md h-10 px-3" placeholder="Даты (YYYY-MM-DD — YYYY-MM-DD)" />
          <button className="btn btn-primary h-10">Показать</button>
        </form>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(it => <OpportunityCard key={it.slug} item={it} locale={params.locale} />)}
      </div>
    </div>
  )
}
