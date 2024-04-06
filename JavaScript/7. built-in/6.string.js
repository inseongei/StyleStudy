const textObj = new String("Hello World");
const text = "Hello World";

console.log(textObj);
console.log(text);

// 문자열은 하나씩 이루어진 집합체 - 배열처럼 접근가능
console.log(text[0]);
console.log(text.charAt(0));

console.log(text.length); // 문자열의 길이

console.log(text.indexOf("l")); // 처음으로 시작해서 해당 문자를 찾으면 그 위치를 반환

console.log(text.lastIndexOf("l")); // 뒤에서부터 시작해서 해당 문자를 찾으면 그 위치를 반환

console.log(text.includes("tx")); // 해당 문자가 있는지 없는지를 판별해 boolean값을 반환

console.log(text.startsWith("H")); // 해당 문자로 시작하는지 확인 (대소문자 구별해야함)
console.log(text.endsWith("!")); // 해당 문자로 끝나는지를 확인

console.log(text.toUpperCase()); // 문자를 전부 대문자로 변환
console.log(text.toLowerCase()); // 문자를 전부 소문자로 변환

console.log(text.substring(0, 2)); // 부분적인 문자를 가져올 수 있다. 0 ~ 2(마지막 미포함) -> 0,1 인덱스 값 가져옴
console.log(text.slice(2)); // 2부터 뒤 부분을 가져올 수 있다.
console.log(text.slice(-2)); // -를 하게 되면 뒤에서 부터 2개를 가져올 수 있다.

const space = "                 space";
console.log(space.trim()); // 공백 제거

const longText = "Get to the point";
console.log(longText.split(" ", 2)); // (기준,몇개) -> 몇개를 적지 않으면 그냥 기준대로 전부 반환
