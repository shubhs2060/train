
//Frequency Counter

function count(a,b){
  if(a.length != b.length) return false
  var obj_a ={},obj_b = {}
  for(i = 0; i < a.length; i++){
    
    if(obj_a[a[i]]){
      
      obj_a[a[i]]++
    }else{
      obj_a[a[i]] = 1
      
    }
  }
  for(i = 0; i < b.length; i++){
    if(obj_b[b[i]]){
      obj_b[b[i]]++
    }else{
      obj_b[b[i]] = 1
    }
  }
  for (key in obj_a){
    if(obj_a[key] != obj_b[key]){
      return false
    }
  }
  return true
}

count([2,3,4],[4,3,2])
