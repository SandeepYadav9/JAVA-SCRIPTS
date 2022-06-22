/* 

let - Const = both are Declear Variables 

let = We can update Vlue
const = We can not update Vlue 
var = Can also update Value 


let a=10;
    a=20 // 20

const a=12;
      a=21; // Type Error 

let = block Scope - can not redeclear variable  - Hosting does not occer in let
var = function Scope - Can redeclear Variable   - Hosting occer in var 

*/

var myName="Sandeep";
console.log(myName)
    myName="Monu";
console.log(myName);//Sandeep, Monu

let myName="Rahul";
console.log(myName)
    myName="Monu";
console.log(myName);//Rahul, Monu

const myName="Pooja";
console.log(myName)
    myName="Monu";
console.log(myName);//Pooja, Type Error
