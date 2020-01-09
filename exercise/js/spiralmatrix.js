function spiral(matrix){
    var list= [];
     while(matrix.length>1){
      list= list.concat(matrix.splice(0,1)[0]);
        for(let i in matrix){
        list.push(matrix[i].splice(-1)[0]);
      }
        list= list.concat(matrix.splice(-1,1)[0].reverse());
        for(let i=matrix.length-1;i>=0;i--){
        list.push(matrix[i].splice(0,1)[0]);
      }
    }
    if(matrix.length>0){
        list.push(matrix.pop()[0]);
    }
    console.log(list);
  }
    let M = [[1, 2, 3,10], 
             [4, 5, 6,11], 
             [7, 8, 9,12],
             [13,14,15,16]];
  spiral(M); 
  