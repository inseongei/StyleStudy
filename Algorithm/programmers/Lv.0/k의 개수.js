/* 04:16 / 10:00 */
function solution(i, j, k) {
  let count = 0;

  for (let a = i; a <= j; a++) {
    let array = (a + "").split("");
    let length = array.filter((item) => +item === k).length;
    count += length;
  }

  return count;
}

// i ~ j까지 k가 몇번 등장하는 지
