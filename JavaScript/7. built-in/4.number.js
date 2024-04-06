const num1 = 123;
const num2 = new Number(123); // 굳이 필요한게 아니라면 객체로 작성 X

console.log(num1); // number
console.log(num2); // object

console.log(Number.MAX_VALUE); // 10**308 정수에서 쓸수있는 최고의 값
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}

if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환 - toFixed
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG")); // 그 나라 지역 언어에 맞게

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자

if (Number.EPSILON && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // JS에서 실수끼리 계산할때 우리가 예상하지 못하는 값이 나올 수 있다. (Number.EPSILON 권장)
console.log(num);

function isEqual(origin, expected) {
  return Math.abs(origin - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
