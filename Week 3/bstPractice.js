
// class Node {
//   constructor(value){
//     this.value = value
//     this.right = null
//     this.left = null
//   }
// }

// class BStree {
//   constructor(){
//     this.root = null
//   }
//   isEmpty(){
//     return this.root === null
//   }
//   insert(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.root = node
//     }else{
//       this.insertNode(this.root , node)
//     }
//   }

//   insertNode(root , node){
//     if (root.value > node.value) {
//       if (root.left === null) {
//         console.log("left");
//         root.left = node
//       }else{
//         this.insertNode(root.left , node)
//       }
//     }else{
//       if (root.right === null) {
//         console.log("right");
//         root.right = node
//       }else{
//         this.insertNode(root.right , node)
//       }
//     }
//   }

//   searchNode(root , value){
//     if (!root) {
//       return false
//     }else{
//       if (root.value === value) {
//         return true
//       }else if(root.value < value){
//           return this.searchNode(root.right , value)
//       }else{
//         return this.searchNode(root.left , value)
//       }
//     }
//   }
//   // preOrder(root){
//   //   if (root) {
//   //     console.log(root.value);
//   //     this.preOrder(root.left)
//   //     this.preOrder(root.right)

//   //   }
//   // }
//   // inOrder(root){
//   //   if (root) {
//   //     this.inOrder(root.left)
//   //     console.log(root.value);
//   //     this.inOrder(root.right)
//   //   }
//   // }
//   // postOrder(root){
//   //   this.postOrder(root.left)
//   //   this.postOrder(root.right)
//   //   console.log(root.value);
//   // }

//   preOrder(root){
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left)
//       this.preOrder(root.right)

//     }

//   }
//   inOrder(root){
//     if (root) {
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//   }
//   postOrder(root){
//     if (root) {
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value);

//     }
//   }

//   BFS(){
//     let queue =[]
//     queue.push(this.root)
//     while(queue.length > 0){
//       let curr = queue.shift()
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left)
//       }if (curr.right) {
//         queue.push(curr.right)
//       }
//     }
//   }

// }

// const bst = new BStree()
// bst.insert(10);
// bst.insert(5);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7)

// console.log(bst.searchNode(bst.root , 7));
// console.log("preOrder");
// console.log(bst.preOrder(bst.root));

// console.log("inOrder");
// console.log(bst.inOrder(bst.root));

// console.log("postOrder");
// console.log(bst.postOrder(bst.root));



// class Node {
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right = null

//   }
// }

// class BST {
//    constructor(){
//     this.root = null
//    }

//    isEmpty(){
//     return this.root === 0
//    }

//    insert (value){
//      const node = new Node(value)
//      if (this.isEmpty()) {
//        this.root = node
//      }else{
//       this.insertNode(this.root , node)
//      }
//    }

//    insertNode(root , node){
//     if(root.value < node.value){
//       if (root.left === null) {
//         root.left = node
//       }else{
//         this.insertNode(root.left , node)
//       }
//     }else{
//       if (root.right === null) {
//         root.right = node
//       }else{
//         this.insertNode(root.right , node)
//       }
//     }
//    }
//    search(root , value){
//     if (!root) {
//       return false
//     }else{
//       if (root.value === value) {
//         return true
//       }else if(root.value < value){
//         this.search(root.left , value)
//       }else{
//         this.search(root.right , value)
//       }
//     }
//    }

//    preOrder(root){
//     if (root) {
//        console.log(root.value);
//        this.preOrder(root.left)
//        this.preOrder(root.right)
//     }
//    }

//    inOrder(root){
//     if (root) {
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//    }

//    postOrder(root){
//     if (root) {
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value);
//     }
//    }

//    //bfs 
//    BFS(){
//     const queue = []
//     queue.push(this.root)
//     while(queue.length > 0){
//       let curr = queue.shift()
//       console.log(curr.value);
//       if (curr.left) {
//          queue.push(curr.left)
//       }
//       if (curr.right) {
//         queue.push(curr.right)
//       }
//     }
//    }

//    max(root){
//       if (!root.left) {
//         return root.value
//       }else{
//         return this.max(root.left)
//       }
//    }
//    max(root){
//     if (!root.right) {
//       return root.value
//     }else{
//       return this.min(root.right)
//     }
//    }


// }

// class Node {
//   constructor(value){
//      this.value = value
//      this.left = null
//      this.right = null
//   }
// }

// class BST {
//   constructor(){
//      this.root = null
//   }

//   isEmpty(){
//     return this.root === null
//   }

//    insert(value){
//      const node = new Node(value)
//      if (this.isEmpty()) {
//         this.root = node
//      }else{
//       this.insertNode(this.root , node)
//      }
//    }

//    insertNode(rootNode , newNode){
//      if (newNode.value < rootNode.value) {
//          if (rootNode.left === null) {
//             rootNode.left = newNode
//          }else{
//           this.insertNode(rootNode.left , newNode)
//          }
//      }else{
//        if (rootNode.right === null) {
//          rootNode.right = newNode
//        }else{
//         this.insertNode(rootNode.right , newNode)
//        }
//      }
//    }

//    search(root , value){
//     if ( !root) {
//        return false
//     }else{
//       if (root.value === value) {
//         return true
//       }else{
//         if(value < root.value){
//           return this.search(root.left , value)
//         }else{
//           return this.search(root.right , value)
//         }
//       }
//     }
//    }




//   }

//   const bst = new BST()



// bst.insert(90)
// bst.insert(20)
// bst.insert(40)
// console.log(bst);

// console.log(bst.search(40));



class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }


  insertNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        rootNode.left = newNode
      } else {
         return this.insertNode(rootNode.left, newNode)
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode
      } else {
        return this.insertNode(rootNode.right, newNode)
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (value < root.value) {
          console.log("left");
          return this.search(root.left, value); // Return the result of the recursive call
        } else {
          console.log("right");
          return this.search(root.right, value); // Return the result of the recursive call
        }
      }
    }
  }
  

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left)
      this.preOrder(root.right)
    }else{
      return false
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.right)
      this.postOrder(root.left)
      console.log(root.value);
    }
  }

  BFS() {
    const queue = []
    queue.push(this.root)
    while (queue.length > 0) {

      let curr = queue.shift()
      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left)
      } if (curr.right) {
        queue.push(curr.right)
      }
    }
  }

  min(root){
    if (!root.left) {
      return root.value
    }else{
      return this.min(root.left)
    }
  }
  max(root){
    if (!root.right) {
      return root.value
    }else{
      return this.max(root.right)
    }
  }
  
  delete( value){
     this.root = this.deleteNode(this.root , value)
  }

  deleteNode(root , value){
    if (!root ) {
      return false
    }else{
      if (value < root.value ) {
        root.left = this.deleteNode(root.left , value)
      }else if(value >  root.value){
        root.right = this.deleteNode(root.right , value)
      }else{
        if (!root.left) {
          return root.right
        }else if(! root.right){
          return root.left
        }

        root.value = this.min(root.right)

        root.right = this.delete(root.right , root.value)
      }
      return root
    }
  }

  bstvalidaton(){
     return this.validate(this.root , -Infinity , Infinity)
  }
  validate(node , min , max){
     if (!node) {
        return true
     }

     if (node.value < min || node.value > max ) {
       return false
     }

     return ( this.validate(node.left , min , node.value) && this.validate(node.right , node.value , max))
  }

}


const bst = new BST()

bst.insert(10)
bst.insert(40)
bst.insert(30)
bst.insert(15)
bst.insert(54)

console.log("oreorder");
console.log(bst.search(40));

console.log("pre order");
bst.preOrder(bst.root)
console.log("IN order");
bst.inOrder(bst.root)
console.log("POSt order");
bst.postOrder(bst.root)
console.log(bst.bstvalidaton());



