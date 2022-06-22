 Module (Import & Export)

 Export -Use Export to Share a Code Block
 
  const add =(x, y)=>{
  return x+y;
  }
  export {add}; // We can use multiple block of code inside {add substract}

Import - Reuse JavaScripts Code Using Import
 ex.
  import {add} from './add';
