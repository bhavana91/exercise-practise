function matrix(m, n) {
  var result = []
  for(var i = 0; i < n; i++) {
      result.push(new Array(m));
  }
  return result
}
let a=matrix(2,2);
let nodes=[];
let edges=[];
for(i=0;i<a.length;i++){
  for(j=0;j<a.length;j++){
   a[i][j]=`${i}${j}`;
if(i==0 && j==0){
   nodes.push({
    data: {
      id: `${i}-${j}N`
    }
  })
  
  edges.push({
     data:{
      id:`${i+1}-${j}N`,
      source:`${i}-${j}N`,
      target:`${i}-${j+1}S`   
    }
  });
  edges.push({
    data:{
     id:`${i}-${j}N`,
     source:`${i}-${j}N`,
     target:`${i+1}-${j}W`   
   }
 });

}

if(i==0 && j==1){
  nodes.push({
      data: {
       id: `${i+1}-${j}N`
      }
   })
 edges.push({
   data:{
     id:`${i+1}-${j}N`,
     source:`${i}-${j}N`,  
    target:`${i+1}-${j}W`
  }
  });
  edges.push({    
 data:{
       id:`${i}-${j}N`,
       source:`${i}-${j}-E`,
      target:`${i}-${j-1}N`
      
   }
  })
 }
 if(i==1 && j==0){
  nodes.push({
    data: {
     id: `${i}-${j}N`
    }
  })
edges.push({
 data:{
     id:`${i}-${j}N`,
     source:`${i}-${j}N`,
     target:`${i}-${j+1}S`   
   }
  });
  edges.push({
   data:{
     id:`${i}-${j}N`,
     source:`${i}-${j}N`,
     target:`${i-1}-${j}E`
   }
 })
 } 
  if(i==1 && j==1){
     nodes.push({
       "data": {
         "id": `${i}-${j}N`
       }
      })
  edges.push({
   data:{
     id:`${i}-${j}N`,
     source:`${i}-${j}N`,
     target:`${i-1}-${j}E`   
   }
  });
  edges.push({
   data:{
     id:`${i}-${j}N`,
     source:`${i}-${j}N`,
     target:`${i}-${j-1}S` 
   }
 })
 } 
}
}
/* let node=JSON.stringify(nodes); 
let edge=JSON.stringify(edges);  */
const r = {
  nodes,
  edges
}
console.log(JSON.stringify(r));
     