const fifteenAdjacency = require('./fifteenAdjacency.js');

// Fifteen puzzle adjacency matrix
const matrix = fifteenAdjacency.getFifteenAdjacencyMatrix();

console.log('[0][0]', matrix[0][0]);
console.log('[1][0]', matrix[1][0]);
console.log('[0][6]', matrix[0][6]);
console.log('[1][2]', matrix[1][2]);
console.log('[1][5]', matrix[1][5]);
console.log('[2][1]', matrix[2][1]);
console.log('[15][15]', matrix[15][15]);




const fifteenTree = require('./fifteenTree.js');

const tree = new fifteenTree.Tree(1, 333);
tree.insert(1, 11, 444);
tree.insert(1, 12, 555);
tree.insert(1, 13, 666);
tree.insert(12, 121, 777);
tree.insert(12, 122, 888);

// TODO build tree from start piece to end piece, https://en.wikipedia.org/wiki/Tree_(data_structure)
// TODO depth-first search in tree, https://en.wikipedia.org/wiki/Depth-first_search
// TODO breadth-first search in tree, https://en.wikipedia.org/wiki/Breadth-first_search