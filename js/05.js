const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum = 0;

for (let i = 0; i < array1.length; i++) {
  sum += array1[i];
}

for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}

console.log(sum);