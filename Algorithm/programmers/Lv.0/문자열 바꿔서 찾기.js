/* 01:06 / 10:00 */
function solution(myString, pat) {
  let str = "";
  for (let i = 0; i < myString.length; i++) {
    myString[i] === "A" ? (str += "B") : (str += "A");
  }

  return str.includes(pat) ? 1 : 0;
}

// 문자 A ↔ B 를 바꾼 뒤 pat이 포함되어 있으면 1 아니면 0
