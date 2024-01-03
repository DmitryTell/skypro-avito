const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const formatSellsFromDate = (str: string) => {
  if (!str) {
    return '';
  }

  const date = new Date(str);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
};
