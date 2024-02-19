import {num,isLegal} from "./a";
// import{num,isLegal} form "./a2";//it shows erroe coxz same num and isLegal has same name in the same file b.ts,hencce we will change name of num and isLegal using 'as'
import {num as n,isLegal as L } from "./a2";
import * as math from "./a";
console.log(num);
console.log(isLegal(21));