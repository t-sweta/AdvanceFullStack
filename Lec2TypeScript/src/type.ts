// function printFn(id:any){
//   console.log(id);
// }
// printFn("shreya");
// printFn(47);   this will return boolean also but we only want either string or numbr
type stringornumber = string | number;
function printFn(id:stringornumber){
     console.log(id);
     return id;
   }
   printFn("shreya");
   printFn(47); 
  //  let output = printFn("12");//type = string or nuber although we have sent string but it shows as string or number
  //  output.toLowerCase();//hence cannot be converted ti kowercase
/*INTERFACE*/
type Person1 = {
  name:string,
  age:number
}
type Manager1={
  name:string,
  dept:string
}
type Employee1 = Person1 & Manager1;
function printemp(emp:Employee1){
  console.log(emp);
}
printemp({name:"shreya",age:122,dept:"cse"});