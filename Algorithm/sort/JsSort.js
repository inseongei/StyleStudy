// Js 내장 Sort 함수 - 오름차순
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

arr.sort(compare);
console.log(arr);

// 간편하게 사용하는 Js Sort 내장 함수 - 오름차순
arr.sort((a, b) => a - b);
console.log(arr);

// 내림차순
arr.sort((a, b) => b - a);
console.log(arr);

// 문자열 오름차순 정렬 예시
let strarr = ["fineapple", "banana", "durian", "apple", "carrot"];
strarr.sort();
console.log(strarr);

// 문자열 내림차순 정렬 예시
function compare2(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
strarr.sort(compare2);
console.log(strarr);

// 문자열에 대한 오름차순 정렬 예시 (대소문자 구분 X)
function compare3(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

strarr.sort(compare3);
console.log(strarr);

// 객체에 대하여 원하는 기준으로 오름차순 정렬 예시
let ObjArr = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];

function compare4(a, b) {
  return b.score - a.score;
}

ObjArr.sort(compare4);
console.log(ObjArr);
