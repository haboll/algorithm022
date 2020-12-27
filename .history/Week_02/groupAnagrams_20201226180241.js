




var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    const map = new Map();
    for(let i=0;i<strs.length; i++){
        const count = new Array(26).fill(0);
        const str = strs[i];
        for(let j = 0; j<str.length; j++) {
            count[str[j].charCodeAt() - 'a'.charCodeAt()]++;
        }
        console.log(count);
        map.get(count) ? map.get(count).push(str) : map.set(count, [str]);
    }
    return [...map.values()];
};


const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));