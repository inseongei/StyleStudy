/* 02:14 / 10:00 */
function solution(box, n) {
  let one = Math.floor(box[0] / n);
  let two = Math.floor(box[1] / n);
  let three = Math.floor(box[2] / n);
  return one * two * three;
}

// 정육면체 모양의 주사위를 최대한 많이 채우고 싶다.
// [가로, 세로, 높이] 저장되어 있는 배열 box
// 주사위 모서리의 길이 정수 n
