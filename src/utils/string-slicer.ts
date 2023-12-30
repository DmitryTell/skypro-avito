export const sliceString = (string: string) => {
  if (string.length > 38) {
    return `${string.slice(0, 39)}...`;
  }

  return string;
};
