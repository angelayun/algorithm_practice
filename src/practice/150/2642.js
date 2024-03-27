/**
 * @param {number} n
 * @param {number[][]} edges
 */
let Graph = function (n, edges) {
  this.graph = new Array(n).fill().map(() => []);
  for (const [from, to, cost] of edges) {
    this.graph[from].push([to, cost]);
  }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const [from, to, cost] = edge;
  this.graph[from].push([to, cost]);
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

Graph.prototype.shortestPath = function (node1, node2) {
  const len = this.graph.length;
  const dist = new Array(len).fill(Infinity);
  const visited = new Array(len).fill(false);
  dist[node1] = 0;
  for (let i = 0; i < len; i++) {
    let minDist = Infinity;
    let minNode = -1;
    for (let j = 0; j < len; j++) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        minNode = j;
      }
    }
    if (minNode === -1) {
      break;
    }
    visited[minNode] = true;
    for (const [to, cost] of this.graph[minNode]) {
      dist[to] = Math.min(dist[to], dist[minNode] + cost);
    }
  }
  return dist[node2] === Infinity ? -1 : dist[node2];
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
