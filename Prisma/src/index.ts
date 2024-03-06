import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertData(email: string, username: string, password: string) {
  const user = await prisma.user.create({
    //.user=calss
    data: {
      //data key banaak bhejna hai isiliye'data key banaak ata bhej rhe hai
      email: "elsa@prisma.io",
      firstname: "Shreya",
      password: "helloworld",
    },
  });
  console.log(user);
}
insertData("shreya@gmail.com", "shreya", "1234");

interface obj {
  username: string;
  password: string;
  email: string;
  // id : number
}
let data = [
  {
    username: "SwetaShreya",
    password: "1234",
    email: "sweta@gmail.com",
  },
  {
    username: "SparshYadva",
    password: "9876",
    email: "sparsh@gmail.com",
  },
];
async function insertManyData(data: obj[]) {
  const createMany = await prisma.user.createMany({
    data: data,
  });
  console.log(createMany);
}
insertManyData(data);

//find and multiple methodds
async function findUnique(id: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  console.log(user);
}
findUnique(2);

interface td {
  title: String;
  desc: String;
  userid: number;
}

let todoData = [
  {
    title: "My First Todo",
    desc: "sparsh gadha hai",
    userid: 1,
  },
  {
    titile: "My Second Todo",
    desc: "Sparsh ullu ka paththa hai",
    userId: 2,
  },
];
async function createTodo(todoData: td[]) {
  const createMany = await prisma.todo.createMany({
    data: todoData,
  });
  console.log(createMany);
}
createTodo(todoData);
