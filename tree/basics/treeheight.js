import Node from '../helpers/node';

export function getTreeHeight(node) {
    if (!node) {
        return 0;
    }

    const leftHeight = getTreeHeight(node.left);
    const rightHeight = getTreeHeight(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}