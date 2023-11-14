arr = [2,3,4,4]

// One way is to move all the values to object and then remove the one with count greater than 1

//other way is using Set
// this also convert set back to an array
var unique = [...new Set(arr)]
