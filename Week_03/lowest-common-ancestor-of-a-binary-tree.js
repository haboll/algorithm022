

//  二叉树的最近公共祖先



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null) return null;

    // 碰到p 或者 q, 直接返回p q.不用再考虑子节点。
    // 有一种情况， p是q的父节点，直接返回父节点p.
    if(root == p || root == q){
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    // 当没有匹配到
    if(left && right)return root;
    return left || right;
};


