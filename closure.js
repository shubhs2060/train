var closure = (function outer(){
  count = 0;
  return function inner (){ return count++;}
})()

//In the above example the count value is private as it can only be accessed by the inner function
