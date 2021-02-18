var reverseOnlyLetters = function(S) {
    const s = [...S];
    const len = s.length;
    for(let i = 0, j = len-1; i < j; i++, j--) {
        while(!isLetter(s[i]) && i < j){ // 注意没有字符串没有灭有字母情况
            i++; 
        }
        while(!isLetter(s[j]) && i < j){
            j--;
        }
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s.join('');
};

var isLetter = function(s){
    let code = s.charCodeAt();
    return (code >= 97 &&  code < 97 + 26) || (code >= 65 && code < 65 + 26);
}

const str = "7_28]";

reverseOnlyLetters(str);