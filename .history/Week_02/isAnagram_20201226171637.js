var isAnagram = function(s, t) {
    if(s.length !== t.length)return false;
    let len = s.length;
    const obj = Object.create(null);
    for(let i = 0; i< len; i++){
        const sItem = s.charAt(i);
        const tItem = t.charAt(i);
        obj[sItem] = obj[sItem] || 0;
        obj[tItem] = obj[tItem] || 0;
        obj[sItem]++;
        obj[tItem]--;
    }
    let res = true;
    Object.keys(obj).forEach(key => {
        if(obj[key] !== 0) {
            res = false;
        }
    })
    return res;
};