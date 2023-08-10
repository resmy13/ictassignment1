function sumOfSquares(arr){
    let sum=0;
    for(const num of arr){
        sum+=num*num;
    }
    return sum;
}
const inputArray=[1,2,3,4,5];
const result= sumOfSquares(inputArray);
console.log('The sum of squares is:${result}');
