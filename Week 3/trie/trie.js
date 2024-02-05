

class Node {
  constructor(){
    this.children = {}
    this.isWordEnd = false
  }
}

class Trie {
  constructor(){
    this.root = new Node()
  }

  insert(word){
    let curr  =this.root
    for( let i=0;i<word.length;i++){
       let charToinsert = word[i];
       if (!curr.children.hasOwnProperty(charToinsert)) {
           curr.children[charToinsert] = new Node()
       }
       curr = curr.children[charToinsert]
    }
    curr.isWordEnd = true
  }

  contains(word){
     let curr = this.root
     for(let i=0;i<word.length;i++){
      let charToinsert = word[i]
       if (!curr.children.hasOwnProperty(charToinsert)) {
         return false
       }
       curr = curr.children[charToinsert]
     }
     return curr.isWordEnd
  }
  prefix(word){
    let curr = this.root

    for(let i=0;i<word.length ;i++){
      let charToInsert = word[i]
      if (!curr.children.hasOwnProperty(charToInsert)) {
          return false
      }
      curr = curr.children[charToInsert]
    }
    return true
  }
}