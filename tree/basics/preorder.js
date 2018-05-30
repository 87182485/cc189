import Node from '../helpers/node';

function inOrder(node) {
    if(!node) {
        return;
    }
    if(node) {
        visit(node);
        inOrder(node.left);
        inOrder(node.right);
    }
}

function visit(node) {
    console.log("top: ", node.val);
}