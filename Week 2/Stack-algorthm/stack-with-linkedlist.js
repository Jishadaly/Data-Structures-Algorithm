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
      this.top = nod  
      
    }
    this.size++
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

  display() {
    if (this.isEmpty()) {
      return null
    }
    let curr = this.top
    while (curr) {
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
stack.pop()

// stack.pop()
stack.display()