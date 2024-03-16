// 불리언 타입

// 활용 예시 - 변수에 is를 붙힌다
let isFree = true;
let isActivated = false;

console.log(isFree);
console.log(isActivated);

console.clear();
// !! 두개를 붙이면 값을 boolean 타입으로 변환할 수 있다.

// Falshy 거짓인 값 - 0, -0, "", null, undefined, NaN
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값 - 1, -1, "문자열", 빈객체, 무한대
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
