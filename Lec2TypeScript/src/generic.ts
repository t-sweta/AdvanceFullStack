//create a fucntion which takes array as an arument and printi its first element,inp can be type of sstinrg array or number
type stringornumberarr = string[] | number[];
function firstElement(arr : stringornumberarr ){
  return arr[0];
}
let res = firstElement(["dsgs","fsgd"]);
let res2 = firstElement([1,2,3]);
// res.toLowerCase();//since the typ eis string arr or number array
//since tsc doesnot know which type the aray is before it is run hence we use generic here
function identify<T>(arg:T):T{ //:T is not necessary
  return arg;
}
let output1 = identify("nitesh");
let putput2 = identify<number>(12);
function identify2<T>(arg:T[]):T{ //:T is string or number or booelean
  return arg[0];
}
let out3 = identify2<string>(["Mrs Minu Thakur","shivam","shreya"]);
console.log(out3);