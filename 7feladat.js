// let a = 2;
// let b = 3;

const ossz = (a, b) => {
  return a + b;
};

const kiv = (a, b) => {
  return a - b;
};

const szor = (a, b) => {
  return a * b;
};

const oszt = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return '0-val való osztásnak nincs értelme!';
  }
};

module.exports = {
  ossz, kiv, szor, oszt
};
