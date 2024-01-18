class Node {
  constructor(value){
     this.value = value
     this.next = null
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last= null
  }

  enqueue(value){
      const node = new Node(value)
      if (!this.first) {
         this.first = node
         this.last = node
      }else{
        this.last.next = node
        this.last = node
      }

  }
  dequeue(){
    if (!this.first) {
      return null
    }else{
      this.first = this.first.next
    }
  }
  print(){
    if (!this.first) {
      console.log("Quewue is emoty ");
    }else{
      let curr = this.first
      let result =''
      while(curr){
        result += curr.value
        
          curr= curr.next
      }
      console.log(result);
    }
  }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()