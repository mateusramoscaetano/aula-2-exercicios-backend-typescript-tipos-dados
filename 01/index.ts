interface Owner {
  name: string;
  pets: string[];
}

const searchPetOwner = (usersList: Owner[], targetPet: string): string => {
  const userfounded = usersList.filter((user) => user.pets.includes(targetPet));

  if (userfounded.length !== 0) {
    return `O dono(a) do(a) ${targetPet} é o(a) ${userfounded[0].name}`;
  }

  return `Que pena ${targetPet}, não encontramos seu dono(a)`;
};

const users: Owner[] = [
  {
    name: "João",
    pets: ["Max"],
  },
  {
    name: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    name: "Beatriz",
    pets: ["Lessie"],
  },
  {
    name: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    name: "Antonio",
    pets: ["Naninha"],
  },
];

const petToFind = "Lessie";

console.log(searchPetOwner(users, petToFind));
