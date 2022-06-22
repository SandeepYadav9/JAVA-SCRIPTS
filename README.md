
Spead & Rest Operators
**Spread and rest ** are three dot **...**
Spread - Used to split up Array elements and Object Properties

   let newNumbers=[...oldNumber, 1,2,3,4];
   let newObject={...oldNumber, age:"33"};
   
   **Rest** Used to take list of function arguments and convert them into an Array
   
     const newFunction=(...args)=>{
     return args.filter()
     }
     
     
     
     ** Destructer **
     Easly estract array element or object propertes and store them into variables
     
     1. Array Destructer
     // Example. 
      [s, p]=["Sandeep", "Sunil"];
      console.log(s, p)// Sandeep, Sunil
      
      2. Object Destructer 
      Example.
      {name}={name:"Monu"}
       console.log(name) // Monu
   
