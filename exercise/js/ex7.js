let date=(month)=>{
    let list=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
    return list[month.getMonth()];
}
console.log(date(new Date("12/13/2009")));
