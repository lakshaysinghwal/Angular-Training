import { orgname } from "./Mymodule"
import {Employee, Person} from "./oopsmodule"



// let p1:Person =new Person()
let p1:Person = { personName:"Lakshay", personAge: 23}

console.log("Person name is ", p1.personName, "Age is ", p1.personAge)





console.log(orgname)

console.log("main ts file executed")

/// Type annotation- Explicit Type Declaration 
let n : number
//n = "ABC"
n = 2
console.log(n)

function add(a:number, b:number) : number{
  return a+b
}

n = add(1,2)
console.log(n)
//n = add("1", 2)

// Type Inference - Implicit Type Declaration

let s = "Lakshay"
console.log(s)
function display() {
  console.log("This is display")
}
display()