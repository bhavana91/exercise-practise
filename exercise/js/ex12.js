let strinsert=(mainstr,insstr,positon)=>{
    if(typeof(positon) == "undefined") {
        positon = 0;
      }
       if(typeof(insstr) == "undefined") {
        insstr = '';
      };
      return mainstr.slice(0, positon) + insstr + mainstr.slice(positon);
}
console.log(strinsert("hi hlo  are you","how",3));