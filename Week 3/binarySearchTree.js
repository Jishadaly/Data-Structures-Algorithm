// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null
//   }


//   isEmpty() {
//     return this.root === null
//   }

  
//   insert(value) {
//     const newNode = new Node(value)
//     if (this.isEmpty()) {
//       this.root = newNode
//     } else {
//       this.insertNode(this.root, newNode)
//     }
//   }



//   insertNode(root, newNode) {
//     if (root.value < newNode.value) {
//       if (root.left === null) {
//         root.left = newNode
//       } else {
//         this.insertNode(root.left, newNode)
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode
//       } else {
//         this.insertNode(root.right, newNode)
//       }
//     }
//   }


//   search(root, value) {
//     if (!root) {
//       return false
//     } else {
//       if (root.value === value) {
//         return true
//       } else if (root.value < value) {
//         return this.search(root.left, value)
//       } else {
//         return this.search(root.right, value)
//       }
//     }
//   }


//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left)
//       this.preOrder(root.right)
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left)
//       console.log(root.value);
//       this.inOrder(root.right)
//     }
//   }
  
//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value);
//     }
//   }

//   levelOrder() {
//     const queue = []
//     queue.push(this.root)
//     while (queue.length) {
//       let curr = queue.shift()
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left)
//       }
//       if (curr.right) {
//         queue.push(curr.right)
//       }
//     }
//   }

//   max(root) {
//     if (!root.right) {
//       return root.value
//     } else {
//       return this.max(root.right)
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value
//     } else {
//       return this.min(root.left)
//     }
//   }


//   delete(value) {
//     this.root = this.deleteNode(this.root, value)
//   }


//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }

//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);

//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);

//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }

//       if (!root.left) {
//         return root.right;
//       }
      
//        else if (!root.right) {
//         return root.left;
//       }

//       root.value = this.max(root.left);
//       root.left = this.deleteNode(root.left, root.value);
//     }
//     return root;
//   }

  
// bstvalidation()
// {
//   return this.isValid(this.root, -Infinity, Infinity) 
// }

// isValid(node, min, max){

//   if (!node) {
//     return true
//   }
//   if (node.value < min || node.value > max) {
//     return false;
//   }

//   return this.isValid(node.left, min, node.value) && this.isValid(node.right, node.value, max);

// }


// // closest(value)
// // {
// //   return this.findClosest(this.root, value, Infinity);
// // }
// // findClosest(node, target, closest)
// // {
// //   if (!node) {
// //     return null;
// //   }
// //   if (Math.abs(node.value - target) < closest) {
// //     closest = node.value;
// //   }
// //   if (target < node.value) {
// //     return this.findClosest(node.left, target, closest)
// //   }
// //   else if (target > node.value) {
// //     return this.findClosest(node.right, target, closest)
// //   }
// //   else {
// //     return closest;
// //   }
// // }
// }


// const bst = new BinarySearchTree()

// console.log("tree is empty ?", bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 20));

// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root);
// // bst.postOrder(bst.root)
// // bst.levelOrder()
// // console.log(bst.max(bst.root));
// // console.log(bst.min(bst.root));

// bst.levelOrder()
// console.log("/////////");
// bst.delete(5)
// bst.levelOrder()
// console.log(bst.bstvalidation());

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

  insert (value){
    const node  = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    }
    else{
      this.insertNode(this.root , node)
    }

  }

  insertNode(rootNode , newNode){
      if (rootNode.value > newNode.value) {
         if (rootNode.left === null) {
            rootNode.right = newNode
         }else{
          this.insertNode(rootNode.left , newNode)
         }
      }else{
        if (rootNode.right=== null) {
           rootNode.right = newNode
        }else{
          this.insertNode(rootNode.right , newNode)
        }
      }
  }

  search(root , value){
    if (!root) {
      return null
    }else{
      if (root.value === value) {
         return true
      }else {
        if (root.value < value) {
          this.search(root.left , value)
        }else{
          this.search(root.right , value)
        }
      }
    }
  }

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
    let queue = []

    queue.push(this.root)
     while (queue.length > 0) {
        let curr = queue.shift()
        console.log(curr.value);
        if (curr.left) {
           queue.push(curr.left)
        }
        if (curr.right) {
          queue.push(curr.right)
        }
     }
  }

  min(root){
    if(!root.left){
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

  validation(){
    return this.isValidate( this.root , -Infinity , Infinity)
  }

  isValidate(node , min , max){
    if (!this.node) {
      return true
    }
    if (node.value  < min || node.value > max ) {
      return false
    }
    return ( this.isValidate(node.left, min , node.value) && this.isValidate(node.right , node.value , max))
  }
  

}

const bst = new BST()

bst.insert(10)
bst.insert(6)
bst.insert(13)
bst.insert(33)
bst.insert(13)


bst.BFS()
console.log(bst.validation());
