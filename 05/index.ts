const separateWord = (word: string): string => {
  const letters = word.split("");
  const spelledLetters = letters.join("-");
  return spelledLetters;
};

const spelledName = separateWord("programador");
console.log(spelledName);
