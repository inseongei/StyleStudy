/* 01:57 / 10:00 */
function solution(num_list) {
  let oven = 0; // 짝
  let odd = 0; // 홀수

  for (let i = 0; i < num_list.length; i++) {
    i % 2 === 0 ? (oven += num_list[i]) : (odd += num_list[i]);
  }

  return Math.max(oven, odd);
}

// 정수 리스트 num_list
