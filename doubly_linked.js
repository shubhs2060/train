class Node{

  constructor(val){
    this.val = val
    this.prev = null
    this.next = null
  }

}


class DoublyLinkedList{

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  push(val){
    var node = new Node(val)
    if(this.length == 0){
      this.head = node
      this.tail =node
      this.length++;
      return node
    }
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    this.length++;
    return this
  }

  pop(){
    if(this.length == 0){
      return null
    }
    var newTail = this.tail.prev
    newTail.next = null
    this.tail = newTail
    this.length--;
    return this
  }

  shift(){
    if(this.length == 0){
      return null
    }
    var oldHead = this.head;
    var newHead = this.head.next;
    newHead.prev = null
    oldHead.next = null
    this.head = newHead
    this.length--;
    return this;
  }

  get(index){
    if(index < 0 || index > this.length - 1) return undefined
    var middle = Math.floor((this.length)/2)
    
    if(index <= middle){
      var counter = 0
      var current = this.head
      while(counter >= 0){
        if(counter == index){
          return current
        }
        current = current.next
        counter++;
      }

    }else{
      var counter = this.length - 1
      var current = this.tail
      while(counter <= this.length - 1){
        if(counter == index){
          return current
        }
        current = current.prev
        counter--;
      }
    }

  }

  remove(index){
    if(index < 0 || index > this.length - 1) return undefined
    if( index == this.length - 1) return this.pop()
    if( index == 0 ) return this.shift()
    var removed = this.get(index)
    var pre = removed.prev
    pre.next = removed.next
    removed.next.prev = pre
    removed.next = null
    removed.prev = null
    this.length--;
    return removed
  }

  //2<->3<->4
  reverse(){
    var temp = null
    var current = this.head
    this.head = this.tail
    this.tail = current
    while(current != null){ 
      temp = current.prev
      current.prev = current.next
      current.next = temp
      current = current.prev
    }
  }
}
