/* 09:57 / 10:00 */
function solution(dots) {
  let x = [];
  let y = [];

  for (let i = 0; i < dots.length; i++) {
    x.push(dots[i][0]);
    y.push(dots[i][1]);
  }

  let maxX = Math.max(...x);
  let minX = Math.min(...x);
  let maxY = Math.max(...y);
  let minY = Math.min(...y);

  let xNum = maxX - minX > 0 ? maxX - minX : maxX + minX;
  let yNum = maxY - minY > 0 ? maxY - minY : maxY + minY;

  return xNum * yNum;
}
