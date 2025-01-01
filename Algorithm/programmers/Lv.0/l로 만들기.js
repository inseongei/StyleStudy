/* 03:25 / 10:00 */
function solution(myString) {
  let code = "l".charCodeAt();
  let result = "";

  for (let i = 0; i < myString.length; i++) {
    myString[i].charCodeAt() > code ? (result += myString[i]) : (result += "l");
  }
  return result;
}

// 알파벳 소문자 myString
