export const sliceString = (string: string) => {
  if (string.length > 43) {
    return `${string.slice(0, 44)}...`;
  }

  return string;
};
