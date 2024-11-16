/* 시간초과💢 */
function solution(my_string, queries) {
  let strArr = my_string.split("");
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    let array = strArr.slice(s, e + 1).reverse();
    strArr.splice(s, e - s + 1, ...array);
  }

  return strArr.join("");
}

/* 07:21 / 10:00 */
function solution(my_string, queries) {
  let result = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    const str = result.slice(s, e + 1).reverse();
    result.splice(s, str.length, ...str);
  }
  return result.join("");
}

// 문자열 my_string
// 이차원 정수 배열 queries → [s,e]

// 1. queries의 배열의 길이만큼 반복문을 돌리면서 my_string을 s부터 e까지 뒤집는다.
// 2. my_string에 대한 배열을 하나 생성해줘야 함
// 3. 2번에서 생성한 배열을 기준으로 slice를 이용해서 배열 자름
// 4. 2번에서 생성한 배열을 기준으로 splice를 이용해서 기존 배열 수정
