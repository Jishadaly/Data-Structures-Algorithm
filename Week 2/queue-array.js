
// class Queue {
//   constructor() {
//     this.item = []
//   }
//   enqueue(element) {
//     this.item.push(element)
//   }
//   dequeue() {
//     this.item.shift()
//   }
//   peak() {
//     if (!this.isEmpty()) {
//       return this.item[0]
//     }
//     return null
//   }
//   isEmpty(){
//     return this.item.length === 0
//   }
//   size(){
//     return this.item.length
//   }
//   print(){
//     console.log(this.item.toLocaleString())
//   }


// }

// class Queue {
// constructor(){
//   this.items = []
//   }
//   enqueue(element){
//     this.items.push(element)
//   }
//   dequeue(){
//   return this.items.shift()
//   }
//   display(){
//     return console.log(this.items.toLocaleString());
//   }
//   peek(){
//     return this.items[0]
//   }
//   isEmpty(){
//     return this.items.length === 0 
//   }
// }


class Queue{

  constructor(){
     this.items = []
  }

  enqueue(element){
     this.items.push(element)
  }

  dequeue(){
    return this.items.shift()
  }

  display(){
   console.log(this.items);
  }

  peek(){
    return this.items[0]
  }
  
  reverse(){
    for(let i=this.items.length-1;i>=0;i--){
      console.log(this.items[i]);
    }
  }
  
}


const queue = new Queue() 
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
// console.log(queue.peek())
queue.display()
console.log(queue.reverse());
