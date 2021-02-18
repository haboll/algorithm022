var reverseWords = function (s) {
    s += " ";
    const stack = [];
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let str = s.charAt(i);
        if (str == " ") {
            while (stack.length) {
                res += stack.pop();
            }
            res += " ";
        } else {
            stack.push(str);
        }
    }
    return res.trim();
};