let age=(a,b)=>{
    return a.age-b.age

}
let name=(a, b)=>{
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
}



let employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}

console.log("with age in asc order");
console.log(employees.sort(age));
console.log("with name indesc order");
let array=employees.sort(name);
console.log(array.reverse(name));