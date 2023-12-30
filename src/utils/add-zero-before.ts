export const addZeroBefore = (number: number) => (String(number).length < 2 ? `0${number}` : `${number}`);
