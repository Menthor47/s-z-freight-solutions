import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (path: string, defaultValue: string = ''): string => {
    return getTranslation(language, path, defaultValue);
  };

  return { t, language };
};
