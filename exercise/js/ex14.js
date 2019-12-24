

let htmlremove=(string)=>{
    if((string===null) || (string===''))
    return false;
    else
    string=string.toString()
    return string.replace(/<[^>]*>/g, '');
}
let string="HI<><><bhavnaa<html>";
console.log(htmlremove(string));