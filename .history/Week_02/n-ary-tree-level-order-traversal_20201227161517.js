/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    let arr = [root];
    while (arr.length) {
        const children = [];
        const levelArr = [];
        arr.forEach(item => {
            levelArr.push(item.val);
            Array.prototype.push.apply(children, item.children)
        })
        res.push(levelArr);
        arr = children;
    }
    return res;
};