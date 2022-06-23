   Hosting - Hosting is default behavier of java scripts to move all decelaration
 to the top;


EX.1
  number=10;
  console.log(number) // 10
  var number ;

EX.2


name ="Sandeep";
 console.log(name, number) // Sandeep , undefiend 
var number=12;


EX-3

add(9, 1) //10
function add(n1, n2){
console.log(n1+n2);
}



                                                             ================================================
JAVA SCRIPTS CLOSER - Closer is  function  that can acces parent function variables and arguments 
  
Note - Most of used in ReactJs

EX. 
function outerFunction (){
var name ="Visualization";
  function innerFunction(){
  console.log(name) // Visualization
  }
  innerFunction();
}
outerFunction()



                                                            ===============================================

JAVAR SCRIPTS SCOPING - TWO TYPES 

1. Global Scope-  variable that declear out side of block scope are Global scope 

var name="Sunil";
function globalScope(){
  // Acces hear 
console.log(name)// Sunil 
}
// Can not access hear 

2. Local scope - Variable declear  inside block scope can not acces out side of block
// Can not access hear 
  function localScope (){
  let name="Mamta";
    console.log(name);// Mamta
  }
// Can not access hear 



3. Laxical Scope - 
