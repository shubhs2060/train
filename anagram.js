
//Frequency Counter

function count(a,b){
  if(a.length != b.length) return false
  var obj_a ={},obj_b = {}
  for(i = 0; i < a.length; i++){
    
    if(obj_a[a.charAt(i)]){
      
      obj_a[a.charAt(i)]++
    }else{
      obj_a[a.charAt(i)] = 1
      
    }
  }
  for(i = 0; i < b.length; i++){
    if(obj_b[b.charAt(i)]){
      obj_b[b.charAt(i)]++
    }else{
      obj_b[b.charAt(i)] = 1
    }
  }
  for (key in obj_a){
    if(obj_a[key] != obj_b[key]){
      return false
    }
  }
  return true
}

count("anagram","nagaram")
