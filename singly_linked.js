class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    var newNode = new Node(val)
    newNode.next = null
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else{
      this.tail.next = newNode
      this.tail = newNode
      
    }
    this.length++;
    
  } 
  pop(){
    if(!this.head) return undefined;
    var current = this.head
    var newTail = current
    while(current.next){
      newTail= current
      current = current.next  
    }
    this.tail = newTail
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
      this.tail = null
      this.head = null
    }
    return current
  }
  shift(val){
    var newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  get(index){
    if(index < 0 || index > this.length) return null
    var counter = 0
    var current = this.head
    while(counter >= 0){
      if(counter == index) return current
      current = current.next
      counter++;
    }
    return false
  }
  insert(index,val){
    if(index < 0 || index > this.length) return null
    var newNode = new Node(val)
    var pre = this.get(index - 1)
    var next2 = pre.next
    pre.next = newNode
    newNode.next = next2
    this.length++;
    return true
  }
  remove(index){
    if(index == this.length - 1){
      this.pop() 
      return true
    }
    var pre = this.get(index - 1)
    var removed = pre.next
    pre.next = removed.next
    removed.next = null
    return removed
  }
 
  reverse(){
    var prev = null;
    var current = this.head
    var next = null;
    this.head = this.tail
    this.tail = current
    while(current != null){
      next = current.next
      current.next = prev
      prev = current
      current = next
      console.log(current)
    }
    return this
  }
  print(){
    var arr = []
    var current = this.head
    while(current){
      arr.push(current)
      current = current.next
    }
    return arr
  }

}

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}
