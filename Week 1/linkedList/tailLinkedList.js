// sample linked list using tale

class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}


class LinkedList{
  constructor(value){
    this.head = value
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  prepend(value){
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }



  append(value) {
    const node = new Node(value);
  
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFrond(){
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      this.head = null
      this.tail = null
    }else{
      const value = this.head.value
      this.head = this.head.next
    }
    this.size --
    
  }

  removeEnd(){
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      this.head = null
      this.tail = null

    }else{
      let prev = this.head
      while(prev.next === this.tail){
         prev.next = null
         this.tail = prev
      }
      this.size --
    }
  }


  removeIndex(index){
   
    if ( index<0 || index>= this.size) {
      return null  
    }

    let removedNode
    if (index === 0) {
       removedNode = this.head
       this.head = this.head.next
       this.size --

    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
          prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.value
    }

    this.size--
    return removedNode.value

    }


     removeValue( value){
      if (this.isEmpty()) {
        return null
      }
      let removedNode
      if (this.head === value) {
           this.head = this.head.next
           this.size--
           return value
         }else{
          
          let pre = this.head
          while(pre.next){
            pre = pre.next
          }
          if (pre.next) {
             removedNode = pre.next
             pre.next = removedNode.next
          }
          
         }
       }


  print(){
    if(this.isEmpty()){
      console.log("linkedList is empty");
    }else{
      let curr = this.head
      while(curr){
        console.log(curr.value)
        curr= curr.next
      }
    }
  }
}


const list = new LinkedList()

list.prepend(2)
list.prepend(3)
list.append(1)
list.print()
list.print()

