interface User {
  name: string;
  age: number;
  status: boolean;
}

const findUserByName = (usersList: User[], targetUser: string): User[] => {
  return usersList.filter((user) =>
    user.name.toLowerCase().startsWith(targetUser.toLowerCase())
  );
};

const usersExample2: User[] = [
  {
    name: "Guido",
    age: 32,
    status: true,
  },
  {
    name: "Dani",
    age: 30,
    status: true,
  },
  {
    name: "João",
    age: 40,
    status: false,
  },
  {
    name: "Guilherme",
    age: 29,
    status: true,
  },
  {
    name: "Ana",
    age: 18,
    status: false,
  },
  {
    name: "José",
    age: 28,
    status: false,
  },
];

console.log(findUserByName(usersExample2, "Jo"));
