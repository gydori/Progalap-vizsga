// A referencia szerinti érték átadásnál az eredeti változó megváltozik, ezért nem is feltétlenül kell használni a return-t, az érték szerintinél pedig nem változik meg.
// Érték szerint adódnak át a primitívek(pl.: number), referencia szerint pedig pl.: tömbök, objektumok.

// érték szerinti:

let a = 2;

const fv = (a) => {
  a = 4;
  return a;
};

fv(a);
console.log(a); // az eredeti értéket, 2-t ad vissza

// referencia szerinti:

let arr = [1, 2, 3];

const fvRef = (arr) => {
  arr[0] = 0;
};

fvRef(arr);
console.log(arr); // a függvény által megváltoztatott értéket, [0, 2, 3]-t ad vissza
