import { languages } from '@/constants/languages';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = languages;

export default getRequestConfig(async ({ requestLocale }: any) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});