
class Node {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
}

class BStree {
  constructor(){
    this.root = null
  }
  isEmpty(){
    return this.root === null
  }
  insert(value){
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    }else{
      this.insertNode(this.root , node)
    }
  }

  insertNode(root , node){
    if (root.value > node.value) {
      if (root.left === null) {
        console.log("left");
        root.left = node
      }else{
        this.insertNode(root.left , node)
      }
    }else{
      if (root.right === null) {
        console.log("right");
        root.right = node
      }else{
        this.insertNode(root.right , node)
      }
    }
  }

  searchNode(root , value){
    if (!root) {
      return false
    }else{
      if (root.value === value) {
        return true
      }else if(root.value < value){
          return this.searchNode(root.right , value)
      }else{
        return this.searchNode(root.left , value)
      }
    }
  }
  // preOrder(root){
  //   if (root) {
  //     console.log(root.value);
  //     this.preOrder(root.left)
  //     this.preOrder(root.right)

  //   }
  // }
  // inOrder(root){
  //   if (root) {
  //     this.inOrder(root.left)
  //     console.log(root.value);
  //     this.inOrder(root.right)
  //   }
  // }
  // postOrder(root){
  //   this.postOrder(root.left)
  //   this.postOrder(root.right)
  //   console.log(root.value);
  // }

  preOrder(root){
    if (root) {
      console.log(root.value);
      this.preOrder(root.left)
      this.preOrder(root.right)
      
    }

  }
  inOrder(root){
    if (root) {
      this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)
    }
  }
  postOrder(root){
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value);

    }
  }

  BFS(){
    let queue =[]
    queue.push(this.root)
    while(queue.length > 0){
      let curr = queue.shift()
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left)
      }if (curr.right) {
        queue.push(curr.right)
      }
    }
  }
  

}

const bst = new BStree()
bst.insert(10);
bst.insert(5);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7)

console.log(bst.searchNode(bst.root , 7));
console.log("preOrder");
console.log(bst.preOrder(bst.root));

console.log("inOrder");
console.log(bst.inOrder(bst.root));

console.log("postOrder");
console.log(bst.postOrder(bst.root));

