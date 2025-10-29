import { dict } from '@/messages';
import { Locale } from '@/lib/i18n/locales';
import OpportunityCard, { Opportunity } from '@/components/OpportunityCard';

function dummy(locale: Locale): Opportunity[] {
  return Array.from({ length: 6 }).map((_, i) => ({
    slug: `demo-${i+1}`,
    title: ['Сортування гуманітарки', 'Прибирання парку', 'Онлайн репетиторство'][i % 3],
    org: ['HelpHub', 'GreenCity', 'School+'][i % 3],
    city: ['Київ', 'Львів', 'Одеса'][i % 3],
    online: i % 3 === 2,
    dates: '2025-11-10 — 2025-11-20',
    imgSeed: `${locale}-top-${i}`,
    urgent: i % 5 === 0,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = dict[locale] as any;
  const items = dummy(locale);
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">{t.heroTitle}</h1>
        <p className="text-neutral-600 mt-4 max-w-3xl mx-auto">{t.heroSubtitle}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href={`/${locale}/opportunities`} className="btn btn-primary">{t.ctaVolunteer}</a>
          <a href={`/${locale}/opportunities`} className="btn btn-secondary">{t.ctaFindVolunteers}</a>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">{t.topOpportunities}</h2>
          <a className="text-primary" href={`/${locale}/opportunities`}>See all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => <OpportunityCard key={item.slug} item={item} locale={locale} />)}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Быстрый старт</h3>
          <p className="text-sm text-neutral-600 mt-2">Создайте профиль и откликайтесь за 2 минуты.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Проверенные организации</h3>
          <p className="text-sm text-neutral-600 mt-2">Верифицируем НУО и волонтёрские центры.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Сертификаты часов</h3>
          <p className="text-sm text-neutral-600 mt-2">Получайте PDF-сертификат участника проєктів.</p>
        </div>
      </section>
    </div>
  );
}
