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
function greet1(ullu ){//if no dataype given then "any" type is assigned by the tsc
  console.log("hello "+ullu);
}
greet1(ullu);
greet1(10);
greet1("shreyuuu");
