/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function(root) {
//     const res = [];
//     function postorder(node){
//         if(node){
//             postorder(node.left);
//             postorder(node.right);
//             res.push(node.val);
//         }
//     }
//     postorder(root);
//     return res;
// };

const tree = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3,
        left: {
            val: 4
        }
    }
}


var postorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let prev = null;
    while(root || stack.length){
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        
        if(!root.right || root.right === prev){
           res.push(root.val); 
           prev = root;
           root = null;
        } else {
            stack.push(root);
            root = root.right;
            
        }
    }
    return res;
};

const res = postorderTraversal(tree);

console.log(res);