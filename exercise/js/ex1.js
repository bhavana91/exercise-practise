let firstelement=(array,number)=>{
    if(array===null)
    return void 0;
    if(number===null)
    return void 0;
    if(number<0)
    return[];
    return array.slice(0,number);
}
console.log("first n elements in the array is");
let array=[1,2,3,4,5,6];
const number=4;
console.log(firstelement(array,number));
let lastelement=(array1,number1)=>{
    if (array1 == null) 
    return void 0;
  if (number1 == null) 
     return array[array1.length - 1];
  return array.slice(Math.max(array1.length - number1, 0));  
}
console.log("last n  elements in the array is");
let array1=[1,2,3,4,5,6];
const number1=4;
console.log(lastelement(array,number));