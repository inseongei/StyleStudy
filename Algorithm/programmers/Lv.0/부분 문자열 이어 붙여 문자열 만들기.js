/* 04:08 : 10:00 */
function solution(my_strings, parts) {
  let result = "";
  for (let i = 0; i < my_strings.length; i++) {
    let [s, e] = parts[i];
    result += my_strings[i].substring(s, e + 1);
  }
  return result;
}

// 길이가 같은 문자열 배열 my_strings
// 이차원 정수 배열 parts → [s,e];

// 1. my_string과 parts의 길이가 같기 때문에 반복문을 한번만 돌린다.
// 2. my_string의 각 요소에 대해 parts의 s부터e 까지 문자열을 잘라낸다. ( e에 + 1을 해주는 이유는 마지막 인덱스를 포함하지 않기 때문)
// 3. 2번에서 잘라낸 문자열을 result라는 문자열에 더해준다.
