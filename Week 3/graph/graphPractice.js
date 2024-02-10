class Graph{
  constructor(){
    this.list = {}
  }
  addVertex(vertex){
    if (!this.list[vertex]) {
      this.list[vertex ] = new Set()
    }
  }
  addEdge(vertex1 , vertex2){
    if (!this.list[vertex1]) {
       this.addVertex(vertex1)
    }
    if (!this.list[vertex2]) {
      this.addVertex(vertex2)
    }
    this.list[vertex1].add(vertex2)
    this.list[vertex2].add(vertex1)
  }

  display(){
    for( let vertex in this.list){
       console.log(vertex +"=> "+ [...this.list[vertex]]);
    }
  }

  hasEdge(vertex1 , vertex2){
    return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
  }
   deleteEdge(vertex1 , vertex2){
     this.list[vertex1].delete(vertex2)
     this.list[vertex2].delete(vertex1)
   }

   deleteVertex(vertex){
      if (!this.list[vertex]) {
         return false
      }
      for( let adjecentvertex in this.list){
        this.deleteEdge(vertex,adjecentvertex)
      }
      delete this.list[vertex]
   }

   dfs(startIndex , visited = {}){
     if (!this.list[startIndex]) {
      return
     }
     console.log(startIndex);
     visited[startIndex] = true;
     for( const neighbor of this.list[startIndex]){
       if (!visited[neighbor]) {
          this.dfs(neighbor,visited)
       }
     }
   }
}