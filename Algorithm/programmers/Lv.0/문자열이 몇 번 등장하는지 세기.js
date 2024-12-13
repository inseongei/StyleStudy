/* 01:47 / 10:00 */
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i < myString.length; i++) {
    let str = myString.substring(i, i + pat.length);
    if (str === pat) count++;
  }
  return count;
}

// pat이 등장하는 횟수
