


//  注意 收20时， 可以找10+5， 或者3张5

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;
    for (let i = 0; i < bills.length; i++) {
        const num = bills[i];
        if (num == 20) {
            if (ten > 0) {
                ten--;
                five--;
            } else {
                five -= 3;
            }
        } else if (num == 10) {
            ten++;
            five--;
        } else {
            five++;
        }
        if (ten < 0 || five < 0) {
            return false;
        }
    }
    return true;
};


