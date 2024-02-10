class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
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

  insertNode(rootNode , newNode){
      if (newNode.value < rootNode.value) {
        if (rootNode.left === null) {
           rootNode.left = newNode
        }else{
           this.insertNode(rootNode.left , newNode)
        }
      }else{
        if(rootNode.right === null){
          rootNode.right = newNode
        }else{
            this.insertNode(rootNode.right , newNode)
        }
      }
  }

  inOrder(root){
    if (root) {
       this.inOrder(root.left)
       console.log(root.value)
       this.inOrder(root.right)
    }
  }
}

const bst =  new BST()
bst.insert(3)
bst.insert(1)
bst.insert(8)

bst.inOrder(bst.root)