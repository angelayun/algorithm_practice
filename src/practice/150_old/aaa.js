// 9 6 4 1
const helper = (arr, item) => {
  if (item < 1) return false;
  if (arr.length == 1) return arr[0] == item;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) return true;
      let m = arr;
    }
  }
};
