  
1..//write a short program if the given number is prime or not. Can you complete ?

/*
0 and 1 , even number are not Prime 
*/

function isPrime(n) {
  if (n == 1 || n == 0) {  // 0,1
    console.log("Is not Prime !");
  } else if (n > 1) {
    // 2 3 4 5 6 7 8 9 10
    for (let i = 2; i <= n; i++) {
      if (n % 2 == 0) {
        console.log("Is not Prime!");
        break;
      }

      if (i == n) { // 2, 3, 5, 7, 11, 13, 17 ,19, 23, 31.....................
        console.log("is Prime !");
      }
    }
  }
}

isPrime(12);

======================================================================
  
  
  // Print all multiples (7) of num between 1 and 100 (both inclusive).



  function multiplesOfGivenNumber(n, number) {
    if ( number*n >= 100) {      // less than 100  
        return;
    }
    console.log(n*number) // 7*1 
    return multiplesOfGivenNumber(n, number+1)
  }

  multiplesOfGivenNumber(7, 1)

  
  
  
  
  
