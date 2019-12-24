let union=(arr1,arr2)=>{
return arr1.concat(arr2);  
}
let arr1=[1,2,3,7];
let arr2=[4,5,6];
console.log("the union of two arrays is:");
console.log(union(arr1,arr2));
console.log("differnce bw two arrays is");
let diff=(array1,array2)=>{
    var temp=[];
    array1 = array1.toString().split(',').map(Number);
   array2 = array2.toString().split(',').map(Number);
   for(let i in array1){
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for( i in array2){
        if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
        }
        return temp.sort((a,b) => a-b);
    
}
let array1=[1,2,3];
let array2=[100,3,10,4];
console.log(diff(array1,array2));
