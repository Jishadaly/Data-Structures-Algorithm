class Stack {
  constructor() {
    this.items = []
  }
  isEmpty() {
    return this.items.length === 0
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }

    this.items.pop()

  }

  revese() {
    if (!this.isEmpty()) {
      for (let i = this.items.length-1; i>=0 ; i--) {
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
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.print()
// stack.revese()
console.log(stack.secondLast());