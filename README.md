# Volontery — Starter (v1, 2025-10-29)

Готовый скелет сайта по нашему Blueprint: Next.js 15 (App Router), TypeScript, Tailwind, i18n через URL-сегмент (`/[locale]`). 
Везде вставлены **рандомные изображения** через `picsum.photos` (см. `next.config.mjs`).

## Запуск
```bash
pnpm i   # или npm i / yarn
pnpm dev
# prod:
pnpm build && pnpm start
```

## Что внутри
- i18n: `middleware.ts` добавляет префикс `/uk` по умолчанию
- Маршруты: `/(locale)/` — home, opportunities (+ detail), blog (+ detail), learn, about, donate, contact, privacy, terms
- Компоненты: Header, Footer, OpportunityCard
- Стили: Tailwind c нашими токенами (часть из design-tokens)
- Картинки: через удалённые источники (picsum/unsplash/placekitten)
- Контент: простые заглушки + messages (RU/UK/EN)

## Дальше по этапам (как в AGENT.md)
1) Подключить реальные тексты из `docs/volunteers-blueprint/content/*` 
2) Добавить карту (Leaflet + OSM) и фильтры с синхронизацией в URL
3) Prisma + БД + API роуты (список/детали/заявки)
4) NextAuth и кабинеты (волонтёр/організація)
5) Пожертвования (LiqPay/Fondy/PayPal) + PDF сертификаты
6) SEO/A11y/GA4/Sentry и запуск
