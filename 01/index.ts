interface User {
  name: string;
  pets: string[];
}

const searchPetOwner = (usersList: User[], targetPet: string) => {
  const userfounded = usersList.filter((user) => user.pets.includes(targetPet));

  if (userfounded.length !== 0) {
    return console.log(
      `O dono(a) do(a) ${targetPet} é o(a) ${userfounded[0].name}`
    );
  }

  return console.log(`Que pena ${targetPet}, não encontramos seu dono(a)`);
};

const users: User[] = [
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

searchPetOwner(users, petToFind);
