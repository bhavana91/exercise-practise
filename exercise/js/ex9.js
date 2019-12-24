var timestamp=(time)=>{
var date = new Date(time*1000);
var hour = date.getHours();
var min = "0" + date.getMinutes();
var sec = "0" + date.getSeconds();
return hour+ ':' + min.substr(-2) + ':' + sec.substr(-2);  
}

console.log(timestamp(1212121343));