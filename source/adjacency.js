// Get fifteen puzzle adjacency matrix
module.exports.getFifteenAdjacencyMatrix = function () {
    return adjacencyMatrix;
}

// Fifteen puzzle adjacency matrix (symmetric 16x16)
//
// Describes the horizontal or vertical neighbors of a puzzle piece
//
// |    |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
// |----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
// |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  2 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  3 |  0 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  4 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  5 |  1 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  6 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |  0 |
// |  7 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  0 |
// |  8 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |
// |  9 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |
// | 10 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |
// | 11 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |  0 |  0 |  1 |  0 |
// | 12 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  1 |
// | 13 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |
// | 14 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |  0 |
// | 15 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |  1 |
// | 16 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  0 |  1 |  0 |

const adjacencyMatrix = [
    [
        false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false,
    ],
    [
        true, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false,
    ],
    [
        false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, false,
    ],
    [
        false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false,
    ],
    [
        true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false,
    ],
    [
        false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false,
    ],
    [
        false, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false,
    ],
    [
        false, false, false, true, false, false, true, false, false, false, false, true, false, false, false, false,
    ],
    [
        false, false, false, false, true, false, false, false, false, true, false, false, true, false, false, false,
    ],
    [
        false, false, false, false, false, true, false, false, true, false, true, false, false, true, false, false,
    ],
    [
        false, false, false, false, false, false, true, false, false, true, false, true, false, false, true, false,
    ],
    [
        false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, true,
    ],
    [
        false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false,
    ],
    [
        false, false, false, false, false, false, false, false, false, true, false, false, true, false, true, false,
    ],
    [
        false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, true,
    ],
    [
        false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false,
    ],
];