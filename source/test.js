const adjacency = require('./adjacency.js');

// Fifteen puzzle adjacency matrix
const adjacencyMatrix = adjacency.getFifteenAdjacencyMatrix();

console.log('[0][0]', adjacencyMatrix[0][0]);
console.log('[1][0]', adjacencyMatrix[1][0]);
console.log('[0][6]', adjacencyMatrix[0][6]);
console.log('[1][2]', adjacencyMatrix[1][2]);
console.log('[1][5]', adjacencyMatrix[1][5]);
console.log('[2][1]', adjacencyMatrix[2][1]);
console.log('[15][15]', adjacencyMatrix[15][15]);

// TODO build tree from start piece to end piece, https://en.wikipedia.org/wiki/Tree_(data_structure)
// TODO depth-first search in tree, https://en.wikipedia.org/wiki/Depth-first_search
// TODO breadth-first search in tree, https://en.wikipedia.org/wiki/Breadth-first_search