/* 05:47 / 10:00 */
function solution(picture, k) {
  let result = [];
  for (let i = 0; i < picture.length; i++) {
    let arr = [...picture[i]];
    let mapArr = arr.map((item) => item.repeat(k)).join("");

    for (let j = 0; j < k; j++) {
      result.push(mapArr);
    }
  }

  return result;
}
