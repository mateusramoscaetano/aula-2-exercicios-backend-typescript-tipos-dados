const separateWord = (word: string): string => {
  const spelledLetters = word.split("").join("-");

  return spelledLetters;
};

const spelledName = separateWord("programador");
console.log(spelledName);
