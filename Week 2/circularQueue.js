// class circularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity)
//     this.capacity = capacity
//     this.currentLength = 0
//     this.rear = -1;
//     this.front = -1;
//   }

//   isFull() {
//     return this.currentLength === this.capacity
//   }

//   isEmpty() {
//     return this.currentLength === 0
//   }

//   enqueue(element) {
//     if (!this.isFull()) {

//       this.rear = (this.rear + 1) % this.capacity
//       this.items[this.rear] = element
//       this.currentLength += 1
//       if (this.front === -1) {
//         this.front = this.rear
//       }
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null
//     }
//     const item = this.items[this.front]
//     this.items[this.front] = null
//     this.front = this.front + 1
//     this.currentLength -= 1
//     if (this.isEmpty()) {
//       this.front = -1
//       this.rear = -1
//     }
//     return item

//   }

//   peek() {
//     if (!this.isEmpty())
//       return this.items[this.front]
//     else return null
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty")
//     } else {
//       let i
//       let str = ''
//       for (i = 0; i !== this.rear; i = (i + 1) % this.capacity) {
//         str = + this.items[i] + " "
//       }
//       str += this.items[i]
//       console.log(str);
//     }
//   }
// }


class circularQueue {
  constructor(capacity) {
    this.items = new Array(capacity)
    this.front = -1
    this.rear = -1
    this.capacity = capacity
    this.currentLength = 0
  }
  isEmpty() {
    return this.currentLength === 0
  }
  isFull() {
    return this.capacity === this.currentLength
  }

  enqueue(element){
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = element
      this.currentLength += 1
      if (this.front === -1) {
        this.front = this.rear
      }
    }
  }

  
  dequeue(){
    if (this.isEmpty()) {
      console.log("queue is empty");
    }else{
       const value = this.items[this.front]
       this.items[this.front] = null
       this.front = this.front+1
       this.currentLength =-1
       if (this.isEmpty()) {
        this.front = -1
        this.rear = -1
       }
       return value
    }
    
  }


  print(){
    if (this.isEmpty()) {
      console.log("queue is empty");
    }else{
      let i
      let str =''
      for(i=0; i!== this.rear ; i=(i+1)%this.capacity){
        str = + this.items[i]+" "
      }
      str += this.items[i]
      console.log(str);
    }
  }
  
  
}

const queue = new circularQueue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()



queue.print()
