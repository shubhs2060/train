class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(val){
    var node = new Node(val)
    if(this.length == 0){
      this.first = node
      this.last = node
    }
    var temp = this.last
    this.last.next = node
    this.last = node
    this.length++;

  }

  dequeue(){
    
    this.first = this.first.next
    this.length--
  }

}

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}
