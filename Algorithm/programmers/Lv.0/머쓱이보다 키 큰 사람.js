/* 00:52 / 10:00 */
function solution(array, height) {
  let result = 0;
  array.forEach((human) => {
    if (human > height) result++;
  });
  return result;
}
