let a={
    0: [1,2,3,4 ,5],
    1:[6,7,8,9],
    2:[0,10,11,15],
    3:[0,0,33,50] 
}
let arr=[];
 for (let [key, value] of Object.entries(a)) {
    arr.push(`${key},${value}`);
  }
   arr=[...new Set(arr)].toString();
  //let flat = arr.reduce((acc, it) => [...acc,...it], []);
  var array = JSON.parse("[" + arr + "]");
  console.log([...new Set(array)]);