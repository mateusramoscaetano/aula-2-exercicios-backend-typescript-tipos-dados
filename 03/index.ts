const multiplyNumbers = (i: number): string => {
  let table = "";
  for (let index = 0; index <= 10; index++) {
    table += `${i} x ${index} = ${i * index}\n`;
  }
  table += "---------------\n";
  return table;
};

let result: string;

const createMultiplicationTable = (listOfNumbers: number[]): string => {
  listOfNumbers.forEach((number) => {
    const table = multiplyNumbers(number);
    result += table;
  });

  return result;
};

console.log(createMultiplicationTable([1, 5, 2]));
