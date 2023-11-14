class Graph{

  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = []
  }

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vt => vt != v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vt => vt != v1)
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      this.adjacencyList[vertex].forEach(element => {
        this.removeEdge(element,vertex)
      });
    }
    delete this.adjacencyList[vertex]
  }

  dfs(start){
    var results = []
    var visited = {}
    var adjacencyList = this.adjacencyList
    if(this.adjacencyList[start] == null) return undefined
    function dfsSolve(start){
      
      visited[start] = true
              results.push(start)
          adjacencyList[start].forEach(element => {
            if (!visited[element]){
              
              dfsSolve(element)
            }
          });
      
    }
    dfsSolve(start)
    return results;
  }
}
var graph3 = new Graph();
graph3.addVertex("A")
graph3.addVertex("B")
graph3.addVertex("C")
graph3.addVertex("D")
graph3.addVertex("E")
graph3.addVertex("F")
graph3.addEdge("A","B")
graph3.addEdge("A","C")
graph3.addEdge("B","D")
graph3.addEdge("C","E")
graph3.addEdge("D","F")
graph3.addEdge("E","F")
graph3.addEdge("E","D")

