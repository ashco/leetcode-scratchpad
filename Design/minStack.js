/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.value = [];
  return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.value.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.value.splice(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.value[this.value.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const arr = this.value.sort((a, b) => a > b);
  return arr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
minStack.top(); // 0.
console.log(minStack.getMin()); // -2
