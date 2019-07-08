let readline = require('readline-sync');

console.log('Adj meg két számot!');
let n = readline.keyIn();
let m = readline.keyIn();

const Matrix = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = Matrix(n, m);

const FillMatrix = (arr) => {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.pow(2, k);
      k++;
    }
  }
  return arr;
};

console.log(FillMatrix(arr));
