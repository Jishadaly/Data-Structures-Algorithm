class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }

  push(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node

    }
    this.size ++
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else {
      let removedNode = this.top

      this.top = this.top.next
      removedNode.next = null
      this.size--
      return removedNode.value;
    }
  }

  display(){
    if (this.isEmpty()) {
      return null
    }
    let curr = this.top
    while(curr){
      console.log(curr.value);
      curr = curr.next
    }
  }
}


// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }

//   push(element){
//     const node = new Node(element)
//     if (this.isEmpty()) {
//       this.top = node
//     }else{
//       node.next = this.top
//       this.top = node
//     }
//     this.size ++
//   }
  
//   pop(){
//     if (this.isEmpty()) {
//       return null
//     }else{
//       const removedNode = this.top
//       this.top = this.top.next
//       removedNode.next =null
//       this.size --
//     }
//   }

//   peek(){
//     if (this.isEmpty()) {
//       return null
//     }else{
//       return this.top.value
//     }
//   }

  
//   display(){
//     if (this.isEmpty()) {
//       console.log("stack is empty");
//     }else{
//       let curr  = this.top
//       while(curr){
//         console.log(curr.value);
//         curr = curr.next
//       }
//     }
//   }
// }

// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//   constructor(){
//     this.top = null
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   push(element){
//     const node = new Node(element)
//     if (this.isEmpty()) {
//        this.top = node
//     }else{
//       node.next = this.top
//       this.top = node
//     }
//     this.size++
//   }
//   pop(){
//     if (this.isEmpty()) {
//       return null
//     }else{
//       let removedNode = this.top
//       this.top = this.top.next
//       removedNode.next  = null
//       this.size--

//     }
//   }

//   display(){
//     if (this.isEmpty()) {
//       console.log("stack is empty");
//     }else{
//       let cur = this.top
//       while(cur){
//         console.log(cur.value);
//         cur = cur.next
//       }
//     }
//   }
// }





// console.log(stack.peek());


// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//    constructor(){
//     this.top = null
//     this.size = 0
//    }
//    isEmpty(){
//     return this.size === 0
//    }
//    push(element){
//     const node = new Node(element)
//     if (this.isEmpty()) {
//       this.top = node
//     }else{
//        node.next = this.top
//        this.top = node
//     }
//     this.size++
//    }
//    pop(){
//     if (this.isEmpty()) {
//       console.log("stack is empty");
//     }else{
//       let removedNode = this.pop
//       this.top = this.top.next
//       this.size--
//       return removedNode
//     }
   
//    }
//    display(){
//     if (this.isEmpty()) {
//       console.log("stack is empty");
//     }else{
//        let curr = this.top
//        while(curr){
//         console.log(curr.value);
//         curr =curr.next
//        }
//     }
//    }
// }


// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {

//   constructor(){
//     this.top = null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size === 0
//   }

//   push(element){
//     const node = new Node(element)
//     if (this.isEmpty()) {
//         this.top = node
//     }else{
//        node.next = this.top
//        this.top = node
//     }
//     this.size ++
//   }
//   display(){
//     if (this.isEmpty()) {
//       console.log(" stack is emmpty ");
//     }else{
//       let cur = this.top
//       while(cur){
//         console.log(cur.value);
//         cur = cur.next
//       }
//     }
//   }
//   pop(){
//     if(this.isEmpty()){
//       return null
//     }else{
//      let removedNode = this.top
//      this.top = this.top.next
//      removedNode.next = null
//      this.size --
//     }
//   }

// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   push(element) {
//     const node = new Node(element);
//     if (this.isEmpty()) {
//       this.top = node;
//     } else {
//       node.next = this.top;
//       this.top = node;
//       this.size++;
//     }
//   }

//   display() {
//     if (this.isEmpty()) {
//       console.log("There is no element");
//     } else {
//       let cur = this.top;
//       while (cur) {
//         console.log(cur.value);
//         cur = cur.next;
//       }
//     }
//   }
// }

// const stack = new Stack();

// stack.push(30);
// stack.push(200);
// stack.push(10);
// stack.display();

class Node{
  constructor(value){
    this.value =value
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  push(element){
    const node = new Node(element);
    if (this.isEmpty()) {
     this.top = node
     
    }else{
     
      node.next = this.top
      this.top = node
    
    }
    this.size++
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      this.top = this.top.next;
      this.size--;
    }
  }

  display(){
    let curr = this.top
    while(curr){
      console.log(curr.value);
      curr = curr.next
    }
  }
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
// stack.pop()
stack.display()