export const locales = ['ru', 'uk', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'uk';

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (locales as readonly string[]).includes(x);
}
