class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }
  deleteEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  deleteVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null
    }
    for (let adjecentVertex in this.adjacencyList) {
      this.deleteEdge(vertex, adjecentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  dfs(startIndex, visited = {}) {
    if (!this.adjacencyList[startIndex]) {
      return
    }
    console.log(startIndex);
    visited[startIndex] = true

    for (let neighbor of this.adjacencyList[startIndex]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited)
      }
    }
  }

  // Breadth-First Search (BFS)
  bfs(startVertex) {
    const queue = [startVertex];
    const visited = { [startVertex]: true };

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }


}


const graph = new Graph()


graph.addEdges("A", "B")
graph.addEdges("B", "C")
graph.addEdges("B", "A")

graph.display()
console.log("dfs");
graph.dfs("C")

