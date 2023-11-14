//This technique is used to make code reusable in javascript

var test = (a) => (b) => (c) => a + b + c

test(2)(3)(4)
