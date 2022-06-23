  JAVA-SCRIPTS Callback -  Callback  exicute after other part of code exicution fineshed  (Async, wait);
    
    
    const callbackFunction=(num1, num2, callback)=>{
      
    let result= num1 +num2; // exicute first 
      
      callback(result);  // than callback function   call displayOutput 
    
    }
    
    let displayOutput=ans=>console.log(`Sum of two number ${ans}`);

   callbackFunction(12, 24, displayOutput)


                                                      =========================================
     
     
     JAVA SCRIPTS Promises - Promises take two type of arguments one resolve another rejected , resolve return promisses rejecte return error 
       
       
       const promises = new Promisses (resolve , rejecte){
       if(2>0){
        resolve("Promisses are working !!");
       }else{
       rejecte(Error("Promisses are not Working !"))
       }
       }

      //promises( ()=> {}, () => {} );

     promises( (result)=> {
     console.log(result)
     }, (error) => {console.log(error)} );
       
       
