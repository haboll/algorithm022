

var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    const obj = Object.create(null);
    for(let i=0;i<strs.length; i++){
        const count = new Array(26).fill(0);
        const str = strs[i];
        for(let j = 0; j<str.length; j++) {
            count[str[j].charCodeAt() - 'a'.charCodeAt()]++;
        }
        obj[count] ? obj[count].push(str) : obj[count] = [str];
    }
    return Object.values(obj);
};


const strs = ["eat","tea","tan","ate","nat","bat"];

const res = groupAnagrams(strs);

console.log(res);