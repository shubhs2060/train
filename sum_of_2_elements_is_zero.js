[-2,-3,1,0,2,3]

function countpair(a){
  left = 0
  right = a.length - 1;
  while(left < right){
    sum = a[left] + a[right]
    console.log(sum)
    if(sum == 0){
      return [a[left],a[right]]
    }else if( sum < 0){
      
      right--
    }else{
      left++
    }
  }
}
