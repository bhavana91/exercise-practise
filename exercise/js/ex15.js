let email=(str)=>
{
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mail.test(str))
{  
return "valid email adress";
}  
else  
{  
return "not a valid email address";
}
}

console.log(email('abcd@gmail.com'));


