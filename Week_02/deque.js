
// 双向链表 构造 双端队列 


function ListNode(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */

var MyCircularDeque = function(k) {
    this.size = 0;
    this.fullSize = k;
    this.head = null;
    this.tail = null;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) {
        throw new Error("The deque is full!");
    }
    var node = new ListNode(value);
    if(this.head){
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this.size++;
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) {
        throw new Error("The deque is full!");
    }
    var node = new ListNode(value);
    if(this.tail){
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this.size++;
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) {
        throw new Error("The deque is empty!");
    }
    var value = this.head.val;
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
    } else {
        var node = this.head.next;
        this.head.next = null;
        node.prev = null;
        this.head = node;
    }
    this.size--;
    return value;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) {
        throw new Error("The deque is empty!");
    }
    var value = this.tail.val;
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
    } else {
        var node = this.tail.prev;
        this.tail.prev = null;
        node.next = null;
        this.tail = node;
    }
    this.size--;
    return value;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.head;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.tail;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.fullSize;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

 var obj = new MyCircularDeque(4);

 obj.insertFront(1);
 obj.insertFront(2);
 obj.insertFront(3);
 obj.insertFront(4);

 console.log(obj);

 console.log(obj.getFront());
 console.log(obj.getRear());

 console.log(obj.deleteFront());
 console.log(obj.deleteLast());

 console.log(obj);

 console.log(1);