let readline = require('readline-sync');

console.log('Adj meg két számot!');
let n = readline.keyIn();
let m = readline.keyIn();

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push([]);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr[i].push('');
  }
}

/* const Matrix = (n, m) => { //terminálban nem fut le jól
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = Matrix(n, m); */

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
