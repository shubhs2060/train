class BST {
  constructor(){
    this.root = null
  }

  insert(val){
    var node = new Node(val)
    if(this.root == null) {
      this.root = node
      return this
    }else{
      var current = this.root
      while(current != null){
        if(node.val < current.val){
          if(current.left == null){
            current.left = node
            return this
          }
          current = current.left
        }else if(node.val > current.val ){
          if(current.right == null){
            current.right = node
            return this
          }
          current = current.right
        }else{
          return undefined;
        }
      }
    }
  }

  find(val){
    if(this.root == null) {
      this.root = node
      return this
    }else{
      var current = this.root
      while(current != null){
        if(val < current.val){
          if(current.left == null){
            return false
          }
          current = current.left
        }else if(val > current.val ){
          if(current.right == null){
            return false
          }
          current = current.right
        }else{
          return current;
        }
      }
    }
  }

  BFS(){
    var node = this.root
    var data = []
    var queue = []
    queue.push(node) 
    while(queue.length){
      node = queue.shift()
      data.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }
}
class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}
var bst = new BST()
bst.insert(50)
bst.insert(45)
bst.insert(75)
bst.insert(10)
bst.insert(25)
bst.insert(35)
bst.insert(7)

//      10
//  2          3
//1  6       8    9
