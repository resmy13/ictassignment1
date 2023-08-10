//write a javascript program to find the most frequent item of an array
var arr=inputArray2
function mostFrequent(){
    if (arr.length===0){
        return "Array is empty.";
    }
    const frequencyCounter={};
    let mostFrequent=null;
    let maxFrequent=0;
    for(const item of arr){
        if(!frequencyCounter[item]){
            frequencyCounter[item]=1;
        }else{frequencyCounter[item]++;
        }
        if (frequencyCounter[item].maxFrequency){
            maxFrequency=frequencyCounter[item];
            mostFrequent=item;
        }
    }
return 'the most frequent item is:${mostFrequent}(appears ${maxFrequency} times).';
}
const inputArray2=[1,2,4,3,9,9,9,9,97,7,7,77,3,8,9,0,4]
const sol=mostFrequent(inputArray2);
console.log(sol);