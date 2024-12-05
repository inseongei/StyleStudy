/* 07:05 / 15:00 */
function solution(s) {
  let result = [];
  const newSet = new Set(Array.from(s));
  let array = [...newSet];

  for (let i = 0; i < array.length; i++) {
    let num = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === array[i]) num++;
    }
    if (num === 1) result.push(array[i]);
  }
  return result.sort().join("");
}

// 문자열 s
// s에서 한 번만 등장하는 문자를 사전순으로 정렬한 문자열을 리턴
