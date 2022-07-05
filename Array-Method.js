1. forEatch(callbackFun) 
/*
Perform the specified action for eatch element of an array 

**callbackFun** - A function contain three arguments 
the forEatch function calls the function one time for eatch elements on
Array 
*/

let arr=[1,2,3,4,5];
arr.forEatch((value, index, array)=>{
  return(
  console.log(value) // 1,2,3,4,5,6
  console.log(value) // 0,1,2,3,4
  console.log(array) //[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6] ......
  ) })
 Note - Not  return new result 
=========================================================================================================================
  
  
  2. map();

/*
3/10


*/
let arr=[1,2,3,4,5];
arr.map((value, index, array)=>{
  return(
  console.log(value) // 1,2,3,4,5,6
 
  ) })

 Note - Always return new veriables

  
=================================================================================================================================

   3. Filter()
   /*
    return the element of an array that meats the condtion 
    are given  in callback functon
    
    predicate()=== A function contains upto three arguments filter calls
    the predicate one time for eatch element in array 
  */

let arr=[1,2,3,4,5];
                           three arguments
let result =arr.filter((value, index, array)=>{ return value > 1 })
console.log(result) // [2,3,4,5]

=====================================================================
                      four arguments
4. reduce(( privesValue, currentValue, currentIndex,  array)=>{},initialValue) 
/*
  return the value of callback function acumelated result . after callback 
  have initial value 
  
*/
let arr=[1,2,3,4,5];

 let result=arr.reduce((priValu,currentValue, currentIndex, array)=>{
   return priValu+currentValue
 }, 0)
 console.log(result) // 15



==============================================================================================

5.  sorts (compairFun )

/*
 Sorts an array in place . mutate the array and return accending and decending 
 order of array 
 
*/
let arr =[11,2,22,1]
let result =arr.sort((a, b) => a - b);
console.log(result) // [1,2,11,22]



 ================
  6. slice(startIndex, endIndex);

Return the copy of selected   array. 

let arr =[11,2,22,1]
let newArr=arr.slice(-1)
console.log(newArr)


==============================








