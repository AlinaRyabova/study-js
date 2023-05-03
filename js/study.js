// const carts = [2, 56, 67, 98, 33, 76, 99];

// // let total = 0;

// // for (const value of cart) {
// //   total += value;
// // }

// // console.log("total:", total);
// let bigNamber = carts[0];

// for (const cart of carts) {
//   if (cart > bigNamber) {
//     bigNamber = cart;
//   }
// }
// console.log(bigNamber);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

const target = 4;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");
