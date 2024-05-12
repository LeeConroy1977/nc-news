export const IntialisedWord = (word) => {
  const initial = word.split("")[0].toUpperCase();
  const remainingWord = word.slice(1);
  return initial + remainingWord;
};
