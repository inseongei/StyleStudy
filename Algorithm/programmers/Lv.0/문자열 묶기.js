/* 03:56 / 10:00 */
function solution(strArr) {
  let result = [];
  let max = Math.max(...strArr.map((item) => item.length));
  let num = 0;

  for (let i = 1; i <= max; i++) {
    for (let j = 0; j < strArr.length; j++) {
      strArr[j].length === i && num++;
    }
    result.push(num);
    num = 0;
  }

  return Math.max(...result);
}

// 문자열 배열 strArr에서 자릿수 만큼 묶었을 때 가장 많이 담기는 것
