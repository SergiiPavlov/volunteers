import { Locale } from '@/lib/i18n/locales';

export default function Page({ params }: { params: { locale: Locale, slug: string } }) {
  const { slug } = params;
  const imgUrl = `https://picsum.photos/seed/${encodeURIComponent(slug)}/1200/500`;
  return (
    <article className="space-y-6">
      <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgUrl} alt={slug} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl font-semibold">Демо-возможность: {slug}</h1>
      <p className="text-neutral-600">Краткое описание проекта, цели, формат (онлайн/офлайн), требования.</p>
      <div className="flex gap-3">
        <button className="btn btn-primary">Отправить заявку</button>
        <button className="btn btn-secondary">Поделиться</button>
      </div>
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-4">
          <h3 className="font-semibold mb-2">Локация и даты</h3>
          <p>Киев • 2025-11-12 — 2025-11-30</p>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold mb-2">Требования</h3>
          <ul className="list-disc pl-5 text-sm text-neutral-700">
            <li>18+</li>
            <li>Командная работа</li>
            <li>2–4 часа/неделю</li>
          </ul>
        </div>
      </section>
    </article>
  )
}
