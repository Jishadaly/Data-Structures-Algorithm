

class Stack {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }
  push(value) {
    this.items.push(value)
  }
  pop() {
    if (this.isEmpty()) {
      console.log("underflow");
    } else {
      return this.items.pop()
    }
  }
  revese() {
    if (!this.isEmpty()) {
      for (let i = this.items.length - 1; i >= 0; i--) {
        console.log(this.items[i]);
      }
    }
  }

  print() {
    if (this.isEmpty()) {
      return null
    }
    console.log(this.items);
  }


  secondLast() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[this.items.length - 2]
    }
  }
  removeMid() {
    if (this.isEmpty()) {
      return null
    }

    let mid = Math.floor(this.items.length / 2)
    let temp = new Stack()

    for (let i = 0; i < mid; i++) {
      temp.push(this.pop())
    }

    let midindex = this.pop()

    while (!temp.isEmpty()) {
      this.push(temp.pop())
    }
    return midindex
  }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.removeMid();
stack.print()
// stack.revese()
// console.log(stack.secondLast());

console.log("Original Stack:", stack.items);
stack.removeMid();
console.log("Stack after removing middle element:", stack.removeMid());