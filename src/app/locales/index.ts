import { ru } from './ru';
import { en } from './en';
import { uz } from './uz';

export type Language = 'ru' | 'en' | 'uz';

export const translations = {
  ru,
  en,
  uz
};

export const languageNames = {
  ru: 'Русский',
  en: 'English',
  uz: "O'zbek"
};
