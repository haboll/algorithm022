var reverseString = function(s) {
    if(!s || !s.length) return [];
    for(let i = 0,j = s.length - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};