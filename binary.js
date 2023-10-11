[1,2,3,5,6,8,23,55,66] num =23
        min         max
 function find(arr,num){
min = 0
max =arr.length - 1
  while(min <= max){
    middle = Math.floor((min + max)/2)

    if(arr[middle] < num){
      min = middle - 1
    }else if(arr[middle] > num){
      max = middle + 1
    }else{
      return middle
    }
  }
  
}
