class Node {
  constructor() {
    this.children = {}
    this.isWordENd = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i]
      if (!curr.children.hasOwnProperty(charToInsert)) {
        curr.children[charToInsert] = new Node
      }
      curr = curr.children[charToInsert]
    }
    curr.isWordENd = true
  }

  contains(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i]
      if (!curr.children.hasOwnProperty(charToFind)) {
        return false
      }
      curr = curr.children[charToFind]
    }
    return curr.isWordENd
  }

  startWithPrfix(prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i]
      if (!curr.children.hasOwnProperty(charToFind)) {
        return false
      }
      curr = curr.children[charToFind]
    }
    return true
  }
  displayTrie() {
    this.displayTrieHelper(this.root, "")
  }

  displayTrieHelper(node, currentString) {
    if (node.isWordENd) {
      console.log(currentString);
    }
    for (const char in node.children) {
      if (node.children.hasOwnProperty(char)) {
        this.displayTrieHelper(node.children[char], currentString + char)
      }
    }
  }

  delete(word){
    if (!this.contains(word)) {
      console.log(`The word "${word}" is not in the trie.`);
      return 
    }
    this.deleteHelper(this.root , word, 0)
  }
  
  deleteHelper(node, word , index){
    if (index === word.length) {
      // We've reached the end of the word, mark isWordEnd as false
      node.isWordENd = false
      return
    }
    const charToDelete = word[index]
    const nextNode = node.children[charToDelete] 
    this.deleteHelper(nextNode , word , index + 1)

    if (Object.keys(nextNode.children).length === 0 && !nextNode.isWordENd) {
      delete node.children[charToDelete]
    }
  }
  

}

const trie = new Trie();
trie.insert("apple")
trie.insert("app");
trie.insert("banana");
trie.insert("ba");
trie.insert("nana")
trie.insert("banana")

// console.log(trie.contains("apple"));
console.log(trie.startWithPrfix("ap"));
trie.displayTrie()


