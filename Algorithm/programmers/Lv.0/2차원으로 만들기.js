/* 03:14 / 10:00 */
function solution(num_list, n) {
  let result = [];
  let ans = [];
  for (let i = 0; i < num_list.length; i += n) {
    for (let j = i; j < n + i; j++) {
      ans.push(num_list[j]);
    }
    result.push(ans);
    ans = [];
  }
  return result;
}

// num_list의 요소들을 n만큼 배열로 만들어 result 배열에 이차원 배열로 저장해야 한다.
// 1. 중첩 반복문을 사용한다.
// 2. OUTER 반복문에는 num_list까지 반복을 하면서
// 3. INNER 반복문에는 n만큼 증가하면서 result에 배열 형태로 넣어준다.
