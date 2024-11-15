/* 01:29 / 10:00 */
function solution(start_num, end_num) {
  let result = [];
  for (let i = start_num; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}

// 정수 start_num , end_num
// end_num까지 1씩 감소하는 수들을 차례로 담은 것
