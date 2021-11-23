class GraphVertex {
  constructor(value) {
    this.value = value;
    this.edges = new LinkedList();
  }

  getKey() {
    return this.value;
  }

  addEdge(vertex) {
    this.edges.append(vertex);
    return this;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex;
  }

  addEdge(startVertex, endVertex) {
    if (!(startVertex.getKey() in this.vertices)) {
      this.addVertex(startVertex);
    }

    if (!(endVertex.getKey() in this.vertices)) {
      this.addVertex(endVertex);
    }

    startVertex.addEdge(endVertex);
    endVertex.addEdge(startVertex);
  }
}
