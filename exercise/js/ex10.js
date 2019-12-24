let hoursdiff=(date1, date2)=> 
 {

  var diff =(date2.getTime() - date1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

date1 = new Date(2014,10,2);
date2 = new Date(2014,10,3);
console.log("diff in hours:");
console.log(hoursdiff(date1, date2));
console.log("diff in num of days");
var datediff = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(datediff('04/02/2014', '11/04/2014'));
console.log("diff in years");
let yeardiff=(dt2, dt1)=> 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(yeardiff(dt1, dt2));
console.log("diff in weeks");
let weekdiff=(dt2, dt1)=> 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(weekdiff(dt1, dt2));
console.log("diff of dates in minites");
let mindiff=(dt2, dt1)=>
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(mindiff(dt1, dt2));
console.log("diff in months");
let diff_months=(dt2, dt1)=>{

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,11,11);
console.log(diff_months(dt1, dt2));




