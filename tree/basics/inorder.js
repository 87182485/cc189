import Node from '../helpers/node';

function inOrder(node) {
    if(!node) {
        return;
    }
    if(node) {
        inOrder(node.left);
        visit(node);
        inOrder(node.right);
    }
}

function visit(node) {
    console.log("top: ", node.val);
}