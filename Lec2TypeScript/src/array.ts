let dsssdhf:number[] = [1,2,3,4];//inorder to make it only a number array
let str : string[]=["hey","i","am","sweta","shreya"];
//ther is no character->it is counted in string only
interface User2{
  name:string,
  age:number
}
function getData(user:User2[]){
  console.log(user);
  user.forEach(u=>console.log(u));
}
let user =[
  {
    name:"sweta",
    age:20
  },
  {
    name:"shreya",
    age:21
  }
]
function isLegal1(user:User2[]){
  let res = user.filter((u)=>u.age>18);
  return res;
}
console.log(isLegal1(user));
getData(user);

