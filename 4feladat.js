// let arr = [1, 2, 1, 3, 4];

const countArr = (e, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      count++;
    }
  }
  return count;
};

// console.log(countArr(1, arr));
