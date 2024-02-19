// //crate a function which takes user as an input and print user age
// interface User{
//   // readonly name:string,//(readonly means it cannot be changed)
//   name:string,//jo bhi property interface mein define kiya hai obj k andr vo same property honi hi chahiye
//   sirName ?: string,//to make sirname optional
//   age:number
// }
// /*JS CODE FOR THE SAME
// const user = {
//   name : "shreya",
//   age : 20
// };
// function printAge(user1){
//   console.log(user1.age);
// }
// printAge(user);
// */

// const u1 = {
//   name : "shreya",
//   age : 20
// };

// function printName(user:User){
//   console.log(user.name);
// }
// printName(u1);

// //INTERFACE NO 2
// interface Person{
//   name:string,
//   age:number,
//   greet:()=>void
// }
// //is class se hm obj create krenge ,agr mai chahti hoo mere obj k paas interface waali property ho to i'implement krna hai
// class Employee implements Person{
//   name:string;
//   age:number;
//   constructor(name: string,age: number){
//     this.name = name;
//     this.age=age;
//   }
//   greet():void{
//     console.log("hello"+this.name);
//   }
// }
// let e1 = new Employee("Nitesh",22);
// e1.greet();
// // interface Person{
// //   name:string,
// //   age:number,
// // }
// // 
