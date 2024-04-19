// const multiple = {
//   [Symbol.iterator]() {
//     const MAX = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > MAX };
//       },
//     };
//   },
// };

// Generator * 키워드
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i); // 0까지만 출력
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0, false

// multiple.return(); // 끝남
multiple.throw("Error");
next = multiple.next();
console.log(next.value, next.done); // 0, false
