interface Tag {
  product: string;
  allotment: number;
  year: number;
  quantity: number;
}

const formatQuantity = (quantity: number) => {
  return quantity.toString().padStart(3, "0");
};

const allTagsGenerated: string[] = [];

const generateTag = (product: Tag) => {
  const { allotment, year, quantity } = product;

  const tag = `${allotment}-${year}-${formatQuantity(quantity)}`;
  allTagsGenerated.push(tag);
};

generateTag({
  product: "CPU Dual Core 3.0GHZ",
  allotment: 321,
  year: 2022,
  quantity: 1,
});

generateTag({
  product: "Graphics Card GTX 3080",
  allotment: 123,
  year: 2023,
  quantity: 10,
});

generateTag({
  product: "Memory Module 16GB DDR4",
  allotment: 456,
  year: 2021,
  quantity: 20,
});

console.log(allTagsGenerated);
