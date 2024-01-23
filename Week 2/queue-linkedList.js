// class Node {
//   constructor(value){
//      this.value = value
//      this.next = null
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null
//     this.last= null
//   }

//   enqueue(value){
//       const node = new Node(value)
//       if (!this.first) {
//          this.first = node
//          this.last = node
//       }else{
//         this.last.next = node
//         this.last = node
//       }

//   }

//   dequeue(){
//     if (!this.first) {
//       return null
//     }else{
//       this.first = this.first.next
//     }
//   }

//   print(){
//     if (!this.first) {
//       console.log("Quewue is emoty ");
//     }else{
//       let curr = this.first
//       let result =''
//       while(curr){
//         result += curr.value
        
//           curr= curr.next
//       }
//       console.log(result);
//     }
//   }
// }


// class Node {
//    constructor(value){
//     this.value = value
//     this.next =  null
//    }
// }

// class Queue{
//   constructor(){
//     this.first = null
//     this.last = null
//   }

//   enqueue(element){
//     const node = new Node(element)
//     if(!this.first){
//        this.first = node 
//        this.last   = node

//     }else{
//       this.last.next = node
//       this.last = node
//     }
//   }

//   dequeue(){
//     if (!this.first) {
//       return null
//     }else{
//       this.first = this.first.next
//     }
//   }
//   print(){
//     if(!this.first){
//       console.log("queue is empty ");
//     }else{
//        let curr = this.first
//        let result = ""
//        while(curr){
//         result += curr.value
//         curr = curr.next
//        }
//        console.log(result);
//     }
//   }


// }

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Queue {
//    constructor(){
//     this.front = null
//     this.rear = null
//    }

//    enqueue(element){
//     const node = new Node(element)
//     if (!this.front) {
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//    }

//    dequeue(){
//     if (!this.front) {
//       console.log(("queue is empty"));
//     }else{
//       this.front.next = this.front
//     }
//    }

//    print(){
//     if (!this.front) {
//       console.log("queue is empty");
//     }else{
//        let cur = this.front
//        while(cur){
//         console.log(cur.value);
//         cur = cur.next
//        }
//     }
//    }
// }



// class Node {
//   constructor(value){
//     this.value = value
//     this.next  = null 
//   }
// }

// class Queue {

//   constructor(){
//     this.front = null
//     this.rear = null
//   }

//   enqueue(element){
//     const node = new Node(element)
//     if (!this.front) {
//       this.front = node
//       this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//   }

//   dequeue(){
//     if (!this.front) {
//       console.log("queue is empty");
//     }else{
//       this.front.next = this.rear
//     }
//   }

//   print(){
//     if (!this.front) {
//       console.log("queue is empty");
//     }else{
//       let cur = this.front
//       while(cur){
//         console.log(cur.value);
//         cur = cur.next
//       }
//     }
//   }

// }


// class Node{
//   constructor(value){
//     this.value = value
//     this.size = 0
//   }
// }

// class Queue{

//   constructor(){
    
//     this.front = null
//     this.rear = null

//   }

//   enqueue(element){
//     const node = new Node(element)
//     if (!this.front) {
//        this.front = node
//        this.rear = node
//     }else{
//       this.rear.next = node
//       this.rear = node
//     }
//   }

//   dequeue(){

//     if (!this.front) {
//       console.log("queue is empty");
//     }else{
//       this.front = this.front.next
//     }

//   }

//   print(){
//     if (!this.front) {
//       console.log("queue is empty");
//     }else{
//        let curr = this.front
//        while(curr){
//         console.log(curr.value);
//         curr = curr.next
//        }
//     }
//   }

// }



class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.front = null
    this.rear = null
    this.size = 0
  }
  enqueue(element){
    const node = new Node(element)
    if (!this.front) {
      this.front = node
      this.rear =node
    }else{
        this.rear.next = node 
        this.rear = node
    }
  }

  dequeue(){
     if (!this.front) {
      return null
     }else{
      this.front = this.front.next

     }
  }
  

  print(){
    if (!this.front) {
      console.log(" queue is empty");
    }else{
      let curr = this.front
      while(curr){
        console.log(curr.value);
        curr = curr.next
      }
    }
  }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()