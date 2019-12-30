
  const persons = [
    {
      "age": 15,
        name: 'John',
        hobby:["reading","studying","music"]    
    },
    {
      "age": 23,
        name: 'Suzi',
        hobby:["reading","playing","dancing"]  
          },
    {
      "age": 23,
        name: 'Joe',
        hobby:["gardening","walking","singing"]  
    },{
      "age": 25,
        name: 'Rosi',
        hobby:["reading","plantation","music"]  
    },{
      "age": 15,
     
        name: 'Gary',
        hobby:["songs","studying","music"]  
      
    }
]
let hobbielist=[];
let output=[];
persons.forEach(hobbie=>{
  hobbielist=[...hobbielist,...hobbie.hobby];
}
)
 hobbielist=[...new Set(hobbielist)];
for(let names of hobbielist){
  let personnames=persons.filter(name=>name.hobby.includes(names)).map(pername=>pername.name)
  output[names]=personnames;
}
console.log(output);
