let fre=(arr1)=>{
let modif = 1;
let a = 0;
let element;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 a++;
                if (modif<a)
                {
                  modif=a; 
                  element = arr1[i];
                }
        }
        a=0;
}
return`${element} ( ${modif} times ) ` ;
}
let arr1=[1,1,1,2,2,2,2,2,2,3,4,5,6];
console.log(fre(arr1))