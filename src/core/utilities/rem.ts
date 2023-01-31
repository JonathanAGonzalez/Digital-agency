export const rem = (number = 16): string => {
  if (number !== 0) {
    return `${number / 16}rem`;
  } else return `0`;
};
