/* 09:40 / 10:00 */
function solution(my_string) {
  let result = [];
  let numStr = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      numStr += my_string[i];
    } else {
      if (numStr !== "") result.push(Number(numStr));
      numStr = "";
    }
  }
  if (numStr !== "") result.push(Number(numStr));

  let num = result.reduce((start, index) => (start += index), 0);

  return num === 0 ? 0 : num;
}

// 문자열 my_string
// 소문자 , 대문자 , 자연수
