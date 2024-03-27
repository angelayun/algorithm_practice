function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export const arrToLinkList = (arr) => {
  // debugger;
  let dummy = new ListNode(-1);
  let head = dummy;
  for (let a of arr) {
    let node = new ListNode(a);
    head.next = node;
    head = head.next;
  }
  return dummy.next;
};
export const linkListToArr = (head) => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

export const constructTree = (array) => {
  if (array == null || array.length == 0 || array[0] == null) {
    return null;
  }
  let index = 0;
  let length = array.length;

  let root = new TreeNode(array[0]);
  let nodeQueue = [root];
  let currNode;
  while (index < length) {
    index++;
    if (index >= length) {
      return root;
    }
    currNode = nodeQueue.shift();
    let leftChild = array[index];
    if (leftChild != null) {
      currNode.left = new TreeNode(leftChild);
      nodeQueue.push(currNode.left);
    }
    index++;
    if (index >= length) {
      return root;
    }
    let rightChild = array[index];
    if (rightChild != null) {
      currNode.right = new TreeNode(rightChild);
      nodeQueue.push(currNode.right);
    }
  }
  return root;
};
