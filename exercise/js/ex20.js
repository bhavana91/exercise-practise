let groupBy=(array, vallue)=> {  
    return array.reduce(function (accumulator, object) { 
      // get the value of our object(age in our case) to use for group    the array as the array key   
      const key = object[vallue]; 
      // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty  
      if (!accumulator[key]) {      
        accumulator[key] = [];    
      }    
  // add the value to the array
      accumulator[key].push(object);
      // return the transformed array
    return accumulator;  
  // Also we also set the initial value of reduce() to an empty object
    }, {});
  }
  const persons = [
    {
      "age": 15,
        name: 'John',
        hobby:["reading","studying","music"]    
    },
    {
      "age": 23,
        name: 'Suzi',
        hobby:'dancing'
          },
    {
      "age": 23,
        name: 'Joe',
        hobby:'playing'    
      
    },{
      "age": 25,
        name: 'Rosi',
        hobby:'shuttle'
    },{
      "age": 15,
     
        name: 'Gary',
        hobby:'singing'
      
    },
    {
      "age": 23,
      
        name: 'Kane',
hobby:'walking'      
    }
]
console.log( groupBy(persons, 'hobby'));