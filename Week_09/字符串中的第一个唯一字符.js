// var firstUniqChar = function(s) {
//     const map = new Map();
//     for(let i = 0; i < s.length; i++){
//         let str = s.charAt(i);
//         if(map.has(str)) {
//             map.set(str, -1);
//         } else {
//             map.set(str, i)
//         }
//     }
//     // map 的遍历顺序是根据插入顺序遍历的
//     const res = Array.from(map.values()).find(item => item > -1);
//     return res > -1 ? res : -1;
// };


var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        let str = s.charAt(i);
        if(s.indexOf(str) === s.lastIndexOf(str)) return i;
    }
    return -1;
}

const s = 'leetcode';

console.log(firstUniqChar(s));