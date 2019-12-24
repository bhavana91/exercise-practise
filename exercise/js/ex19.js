
let removeele=(array,number)=>{
    let index=array.indexOf(number);
    if(index>-1){
        array.splice(index,1);
    }
    return array;
}
let array=[1,2,3,4,5,6];
let number=4;
console.log(removeele(array,number));
let arr1=["abc","def","ghi"];
arr1.splice(2, 0, "Lene");
console.log(arr1);

