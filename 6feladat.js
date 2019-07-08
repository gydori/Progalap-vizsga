// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 5, 6];

const Metszet = (arr1, arr2) => {
  let metsz = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        metsz[k] = arr1[i];
        k++;
        break;
      }
    }
  }
  return metsz;
};

// console.log(Metszet(arr1, arr2));
