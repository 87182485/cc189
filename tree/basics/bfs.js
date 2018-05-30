import Node from '../helpers/node';

export function bfs(node) {
    if(!node) {
        return;
    }
    let queue = [];
    let arr = [];

    queue.push(node);

    while(queue.length>0) {
        const current = queue.shift();

        arr.push(node.val);

        if(node.left) {
            queue.push(node.left);
        }

        if(node.left) {
            queue.push(node.right)
        }
    }
}

function visit(node, arr) {
    arr.push(node.val);

    console.log(node.val);
}