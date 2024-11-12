/* 01:36 / 10:00 */
function solution(my_string) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    let str = my_string.substring(i, my_string.length + 1);
    result.push(str);
  }
  return result.sort();
}

// 1. result 배열을 만들어 준다.
// 2. 반복문을 통해 0번부터 my_string의 길이만큼 반복을 한다.
// 3. my_string 문자열에 substring을 이용해서 i 부터 my_string까지 돌려준 뒤 result 배열에 넣어준다.
// 4. 최종적으로 리턴할 때는 사전순이라고 했으니 result를 sort로 정렬해준다.
