
class Queue {
  constructor() {
    this.item = []
  }
  enqueue(element) {
    this.item.push(element)
  }
  dequeue() {
    this.item.shift()
  }
  peak() {
    if (!this.isEmpty()) {
      return this.item[0]
    }
    return null
  }
  isEmpty(){
    return this.item.length === 0
  }
  size(){
    return this.item.length
  }
  print(){
    console.log(this.item.toLocaleString())
  }


}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(20)
queue.print()
