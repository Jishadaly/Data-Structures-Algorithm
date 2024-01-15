class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {



  let head = new Node(arr[0]);
  let current = head;


  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}


let arrayExample = [1, 2, 3, 4, 5];
let linkedList = arrayToLinkedList(arrayExample);


let current = linkedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
