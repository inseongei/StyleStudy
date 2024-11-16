/* 시간초과💢 */
function solution(my_string, s, e) {
  let array = my_string.split("");
  let changeArr = array.slice(s, e + 1).reverse();
  array.splice(s, changeArr.length, ...changeArr);
  return array.join("");
}

// 문자열 my_string
// 정수 s,e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스e까지 뒤집은 문자열을 return

// 1. reverse 메소드를 사용하기 위해 배열 형태로 바꿔준다.
// 2. splice 이용해서 기존 배열을 바꾼 배열과 교체

/* 04:48 / 10:00 */
function solution(my_string, s, e) {
  let strOne = my_string.substring(0, s);
  let strTwo = my_string.substring(e + 1, my_string.length + 1);
  let reverseStr = my_string
    .substring(s, e + 1)
    .split("")
    .reverse()
    .join("");

  return strOne + reverseStr + strTwo;
}

// 문자열 my_string
// 정수 s , e
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 리턴한다.

// 1. my_string에서 substring을 이용해 s부터 e까지의 문자열을 잘라낸다.
// 2. 잘라낸 문자열을 배열로 만들고 reverse() 메소드를 사용해서 바꿔준다.
// 3. my_string의 0부터 s까지와 e부터 my_string의 길이까지 의 값을 구해준다.
