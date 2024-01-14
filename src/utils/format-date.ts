import { addZeroBefore } from './add-zero-before';


export const formatDate = (str: string) => {
  if (!str) {
    return 'Неизвестно';
  }

  const now = new Date();
  const past = new Date(str);
  const difference = Number(now) - Number(past);

  const diffDays = Math.round(difference / (1000 * 60 * 60 * 24));
  const diffMonths = Math.round(difference / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.round(difference / (1000 * 60 * 60 * 24 * 365));

  if (diffDays === 0) {
    return `Сегодня в ${addZeroBefore(past.getHours() + 3)}:${addZeroBefore(past.getMinutes())}`;
  }

  if (diffDays === 1) {
    return `Вчера в ${addZeroBefore(past.getHours() + 3)}:${addZeroBefore(past.getMinutes())}`;
  }

  if (diffDays === 2) {
    return `Позавчера в ${addZeroBefore(past.getHours() + 3)}:${addZeroBefore(past.getMinutes())}`;
  }

  if (diffDays > 2 && diffDays < 30) {
    return `${diffDays} назад`;
  }

  if (diffDays > 30 && diffMonths === 1) {
    return 'Месяц назад';
  }

  if (diffDays > 30 && (diffMonths === 2 || diffMonths === 3 || diffMonths === 4)) {
    return `${diffMonths} месяца назад`;
  }

  if (diffDays > 30 && diffMonths > 4 && diffMonths < 12) {
    return `${diffMonths} месяцев назад`;
  }

  if (diffDays > 30 && diffMonths > 11 && diffYears < 2) {
    return 'Более года назад';
  }

  return `${diffYears} лет назад`;
};
