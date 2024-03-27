var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }
  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  const index = this.map.get(val);
  const last = this.arr.length - 1;
  const lastVal = this.arr[last];
  this.arr[index] = lastVal;
  this.arr.pop();
  this.map.set(lastVal, index);
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
