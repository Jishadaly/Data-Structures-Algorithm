class DoubleEndedQueue {
  constructor() {
      this.item = [];
      this.rear = -1;
      this.front = -1;
      this.size = 0;
  }

  isEmpty() {
      return this.front === -1 && this.rear === -1;
  }

  getSize() {
      return this.size;
  }

  addrear(element) {
      if (this.isEmpty()) {
          this.front = 0;
      }
      this.rear++;
      this.item[this.rear] = element;
      this.size++;
  }

  removerear() {
      if (this.isEmpty()) {
          console.log('queue is empty');
      }
      const value = this.item[this.rear];
      this.rear--;
      this.size--;
      return value;
  }

  addfront(element) {
      if (this.isEmpty()) {
          this.front = 0;
          this.item[this.front] = element;
      } else {
          this.front--;
          this.item[this.front] = element;
      }
      this.size++;
  }
  removefront(){
      const value=this.item[this.front]
      this.front++
      return value
  }

  display() {
      console.log(this.item);
  }
}

let dqueue = new DoubleEndedQueue();
dqueue.addrear(10);
dqueue.addrear(20);
dqueue.addrear(30);
dqueue.addrear(40);
dqueue.removerear();
dqueue.addfront(5);
dqueue.display();
console.log('empty?', dqueue.isEmpty());
console.log('size', dqueue.getSize());



// class DoubleEndedQueue {

//   constructor() {

//     this.item = []
//     this.front = -1;
//     this.rear = -1

//   }

//   isEmpty() {
//     return this.front === -1 && this.rear === -1;
//   }

//   getSize() {
//     return this.size
//   }

//   addrear(element) {
//     if (this.isEmpty()) {
//       this.front = 0;
//     }
//     this.rear++;
//     this.item[this.rear] = element;
//     this.size++;
//   }

//   removerear(){
//     if (element) {
//       if (this.isEmpty()) {
//          console.log("queue is empty");
//       }
//       const value = this.item[this.rear]
//       this.rear --
//       this.size --
//       return value
//     }
//   }

//   addfront(element){
//      if (this.isEmpty()) {
//       this.front = 0
//       this.item[this.front] = element
      
//      }else{
//        this.front --;
//        this.item[this.front] = element
//      }
//     this.size ++;
//   }

//   removeFront(){
//     if (this.isEmpty()) {
//       return null
//     }else{
//       const value = this.item[this.front]
//       this.front ++
//       return value
//     }
//   }

//   display()
// {
//   console.log(this.item);
// }

// }

// class DoubleEndedQueue{
//   constructor(){
//     this.front=-1
//     this.rear = -1
//     this.items =[]
//     this.size = 0
//   }

//   isEmpty(){
//     return this.front === -1 && this.rear === -1
//   }

//   addrear(element){
//     if (this.isEmpty()) {
//       this.front = 0
//     }
//     this.rear ++
//     this.items[this.rear] = element
//     this.size++
//   }

//   removeRear(){
//     if (this.isEmpty()) {
//       console.log("que is empty");
//     }else{
//       const value = this.items[this.rear]
//       this.rear--
//       this.size--
//     }
//   }

//   addFront(element){
//     if (this.isEmpty()) {
//       this.front = 0
//       this.items[this.front] = element
//     }else{
//       this.front --
//       this.items[this.front]  = element
//     }
//     this.size++
//   }
//   removeFront(){
//     if (this.isEmpty()) {
//       return null
//     }

//     const value = this.items[this.front]
//     this.front++
//     this.size --
//   }
  

//   display(){
//     if (this.isEmpty()) {
//       console.log("queue is empty");
//     }else{
//       console.log(this.items);
//     }
//   }

// }


// let dequeue = new DoubleEndedQueue()


// dequeue.addrear(30)
// // dequeue.removeRear()
// dequeue.addrear(300)

// dequeue.addFront(1000)



// // dequeue.addfront(10)
// dequeue.display()

