let number=(num)=>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const num=1234567890;
console.log(number(num));