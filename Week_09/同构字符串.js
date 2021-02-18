var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    const obj1 = Object.create(null);
    const obj2 = Object.create(null);
    const len = s.length;
    let res = true;
    for(let i = 0; i < len; i++){
        const sStr = s.charAt(i);
        const tStr = t.charAt(i);
        if((obj1[sStr] && obj1[sStr] !== tStr) || (obj2[tStr] && obj2[tStr] !== sStr)) {
            res = false;
            break;
        } 
        obj1[sStr] = tStr;
        obj2[tStr] = sStr;
    }
    return res;
};