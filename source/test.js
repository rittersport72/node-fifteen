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

console.log('find 11', tree.find(11));
console.log('find 122', tree.find(122));
console.log('find 3', tree.find(3));

let myNode = new fifteenTree.Node(1, 13, 666);
console.log('walk Node(1, 13, 666)', tree.walk( myNode ));

// TODO build tree from start piece to end piece, https://en.wikipedia.org/wiki/Tree_(data_structure)
// TODO depth-first search in tree, https://en.wikipedia.org/wiki/Depth-first_search
// TODO breadth-first search in tree, https://en.wikipedia.org/wiki/Breadth-first_search


const offset = 100;
/**
* Create tree from piece number
* 
* @param {number} piece piece number from 1 to 16 
* @param {Array<number>} matrix
* @returns Return tree
*/
function buildTree(piece, matrix) {
    console.log('piece', piece);
  
    // Check if piece is in range
    if (piece > 0 && piece <= 16) {
        // Create empty tree
        const tree = new fifteenTree.Tree(piece, piece);
        // Find neighbors array of piece
        const neighbors = matrix[piece - 1];
        //console.log('neighbors', neighbors);

        // Iterate neighbors array
        neighbors.forEach(function (element, index) {
            // If element is neighbor
            if (element === 1) {
                console.log(element);
                // Insert children in tree
                tree.insert(piece, offset + index, index + 1);
            }
        });

        // Find children of piece
        let node = tree.find(piece);
        console.log('find ', node);

        // Iterate node array


    
        return tree;
    }

    return undefined;
}

buildTree(11, matrix);