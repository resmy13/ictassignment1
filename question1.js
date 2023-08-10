function isPrime(num){ //program to get an array and to read the first lement of an array and heck whether 
    if (num<=1){           //it is prime or not.
           return false;
       }
       for(let i=2;i<=Math.sqrt(num); i++){
           if(num%i===0){
               returnfalse;
           }
       }
       return true;
   }
   function checkFirstElementIsPrime(arr){
       if(arr.length===0){
           return "Array is empty.";
       }
       const firstElement=arr[0];
       if(isPrime(firstElement)){
           return '${firstElement} is  a prime number.';
       }else{
           return'${firstElement} is not a prime number.';
       }
   }
   const inputArray=[11,5,9,10];
   const result=checkFirstElementIsPrime(inputArray);
   console.log(result);
   