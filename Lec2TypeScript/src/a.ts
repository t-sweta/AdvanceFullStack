let num: number=7;
//let name: datatype=10;
// num="helllo";//shows error on compile time only
console.log(num);
let ullu: string="sparsh";
console.log(ullu);
let boolian: boolean=true;
console.log(boolian);
//function k andr argument mein datatype kaise dete hai
//1.function with name greet
//single output
//cosole.log("hello"+name)
//doesnot return anything
function greet(ullu : string){
  console.log("hello "+ullu);
}
greet(ullu);
// function greet1(ullu ){//if no dataype given then "any" type is assigned by the tsc
//   console.log("hello "+ullu);
// }
// greet1(ullu);
// greet1(10);
// greet1("shreyuuu");
//type inferencing
let c = 7;//tsc refers it to no. implicitly
// c="hey";//shows error
function sum(a:number,b:number):number{//:return type of the function
  return a+b;
}
console.log(sum(5,10));

function isLegal(age:number): boolean{
  if(age>18) return true;
  return false;
}
isLegal(12);

function fun(fn:()=>void):void{
  setTimeout(fn,1000);
}
fun(function(){
  console.log("hello shreyuu");
});
let foo