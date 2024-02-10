// class Graph {
//   constructor(){
//      this.adjacencyList = {}
//   }

//   addVertex(vertex){
//     if (!this.adjacencyList[vertex]) {
//        this.adjacencyList[vertex] = new Set()
//     }
//   }

//   addEdges(vertex1 , vertex2){
//     if (!this.adjacencyList[vertex1]) {
//         this.addVertex(vertex1)
//     }
//     if (!this.adjacencyList[vertex2]) {
//        this.addVertex(vertex2)
//     }
//     this.adjacencyList[vertex1].add(vertex2)
//     this.adjacencyList[vertex2].add(vertex1)
//   }
//   deleteEdge(vertex1, vertex2){
//     this.adjacencyList[vertex1].delete(vertex2)
//     this.adjacencyList[vertex2].delete(vertex1)
//   }

//   display(){
//     for(let vertex in this.adjacencyList){
//       console.log(vertex +" -> " + [...this.adjacencyList[vertex]]);
//     }
//   }

//   deleteVertex(vertex){
//     if (!this.adjacencyList[vertex]) {
//       return null
//     }
//     for( let adjecentVertex in this.adjacencyList){
//        this.deleteEdge(vertex,adjecentVertex)
//     }
//     delete this.adjacencyList[vertex]
//   }

//   dfs( startIndex , visited = {}){
//     if (!this.adjacencyList[startIndex]) {
//       return 
//     }
//     console.log(startIndex);
//     visited[startIndex] = true

//     for(let neighbor of this.adjacencyList[startIndex]){
//       if (!visited[neighbor]) {
//           this.dfs(neighbor , visited)
//       }
//     }
//   }

// }


// const graph = new Graph()


// graph.addEdges("A","B")
// graph.addEdges("B","C")
// graph.addEdges("B","A")

// graph.display()
// console.log("dfs");
// graph.dfs("C")



// class Graph {
//   constructor(){
//     this.List = {}
//   }

//   addVertex( vertex){
//      if (!this.List[vertex]) {
//        this.List[vertex] = new Set()
//      }
//   }
//   addEdge(vertex1,vertex2){
//     if (!this.List[vertex1]) {
//        this.addVertex(vertex1)
//     }
//     if (!this.List[vertex2]) {
//       this.addVertex(vertex2)
//     }
//      this.List[vertex1].add(vertex2)
//      this.List[vertex2].add(vertex2)
//   }
  
//   display(){
//     for(let vertex in this.List){
//       console.log(vertex+"=> " + [...this.vertex[vertex]]);
//     }
//   }

//   hasEdge(vertex1, vertex2){
//     return (this.List[vertex1].has(vertex2) && this.List[vertex2].has(vertex2))
//   }

//   deleteEdge(vertex1 ,vertex2){
//     this.List[vertex1].delete(vertex2)
//     this.List[vertex2].delete(vertex1)
//   }
//   deleteVertex(vertex){
//      if (!this.List[vertex]) {
//       return null
//      }
//      for( let adjecentVertex in this.List){
//         this.deleteEdge(vertex , adjecentVertex)
//      }
//      delete this.List[vertex]
//   }

//    display(){
//     for( let vertex in this.List){
//        console.log(vertex + "=>"+ [...this.List[vertex]]);
//     }
//    }

//    dfs(start , visited ={}){
//       if (!this.List[start]) {
//          return
//       }
//       console.log(start);
//       visited[start] = true

//       for( const neighbor of this.List[start]){
//         if (!this.List[neighbor]) {
//            this.dfs(neighbor , visited)
//         }
//       }
//    }


// }

// class Graph {
//    constructor(){
//     this.adjecentlist = {}
//    }

//    addvertex(vertex){
//     if (!this.adjecentlist[vertex]) {
//        this.adjecentlist[vertex] = new Set()
//     }
//    }

//    addEdge(vertex1 , vertex2){
//     if (!this.adjecentlist[vertex1]) {
//        this.addvertex(vertex1)
//     }
//     if (!this.adjecentlist[vertex2]) {
//       this.addvertex(vertex2)
//    }
//    this.adjecentlist[vertex1].add(vertex2)
//    this.adjecentlist[vertex2].add(vertex1)
//    }
   
//    removeEdge(vertex1 , vertex2){
//      this.adjecentlist[vertex1].delete(vertex2)
//      this.adjecentlist[vertex2].delete(vertex1)
//    }

//    removeVertex(vertex){
//      if (!this.adjecentlist[vertex]) {
//         return null
//      }
//      for( let adjecentavertex in this.adjecentlist){
//          this.removeEdge(vertex  , adjecentavertex)
//      }
//      delete this.adjecentlist[vertex]
//    }

//    display(){
//    for( let vertex in this.adjecentlist){
//       console.log(vertex + "=>" + [...this.adjecentlist[vertex]]);
//    }
//    }
   
// }

// const graph = new Graph()

// graph.addEdge("a" , "b")
// graph.addEdge("a" , "c")


// graph.display()


