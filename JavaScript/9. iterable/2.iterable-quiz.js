// [Symbol.iterator]() : Iterator{next() : {value,done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0,1,2,3 ... 9
// 0,2,4,6,8,10,12, ...

const multiple = {
  [Symbol.iterator]() {
    const MAX = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > MAX };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
