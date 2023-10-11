function test(s){
var set = new Set()
var left = 0
var right = 0
var longest_sub = 0

while(right < s.length){
  if(!set.has(s.charAt(right))){
    set.add(s.charAt(right))
    right++
    longest_sub = Math.max(longest_sub,set.size)
    
  }else{
    set.delete(s.charAt(left))
    left++
  }
}
console.log(longest_sub)
return longest_sub







}


test("abca")

