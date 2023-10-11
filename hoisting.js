// //whenever js runs it moves all the varaible declaration to the top. All undeclared variables are by default having a global scope. 
// undeclared var only becaomes active when it is assigned a value

//function declaration are hoisted to the top but function expression are not hoisted so if you try to use a function expression before declaration you will get a Reference Error

test()

function test(){
  console.log("declaration")
}

test2()// will give Reference Error since it is a Expression
var test2 = function(){
  console.log("test2")
}

//Hoisting for let and var,const
// by default var has a value of undefined so if you try to access var keyword before declaration or intialization then it will give the value as undefined

// let does not have a default value so if you try to access before intialization or declaration then it will give not defined error

console.log(x)
x = 2 //  will give a Referrence Error

console.log(z)
var z = 2 //  will print undefined

console.log(c)
let c = 2 //  will give error

