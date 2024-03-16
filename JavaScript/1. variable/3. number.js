// JS는 숫자관련 타입이 세부적으로 나눠져 있지 않기 때문에 한번에 숫자 타입으로 지정하면 된다.
let interger = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(interger);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / "text"); // NaN ( Not a Number )

let bigInt = 1234567891236123132132132132132132132n;
console.log(bigInt);
