/**
* Node for fifteen puzzle
*/
module.exports.Node = class Node {
    /**
    * Constructor
    * 
    * @param {number} key 
    * @param {number} value 
    * @param {number} parent 
    */
    constructor(key, value, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
 
        console.log(`Node ${this.key} ${this.value}`);
    }
}

/**
* Tree for fifteen puzzle
*/
module.exports.Tree = class Tree {
    /**
    * Constructor
    * 
    * @param {number} key 
    * @param {number} value 
    */
    constructor(key, value) {
        this.root = new module.exports.Node(key, value);
    }
    
    /**
    * Walk the tree
    * 
    * @param {number} node 
    */
    *walk(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.walk(child);
            }
        }
    }
    
    /**
    * Insert node into tree
    * 
    * @param {number} parentNodeKey 
    * @param {number} key 
    * @param {number} value 
    * @returns Return true if node is inserted, else false
    */
    insert(parentNodeKey, key, value) {
        for (let node of this.walk()) {
            if (node.key === parentNodeKey) {
                node.children.push(new module.exports.Node(key, value, node));
                return true;
            }
        }
        return false;
    }
}