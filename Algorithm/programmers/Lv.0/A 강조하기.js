/* 03:04 / 10:00 */
function solution(myString) {
  let result = "";
  myString = myString.toLowerCase();
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "a") {
      result += myString[i].toUpperCase();
    } else {
      result += myString[i];
    }
  }

  return result;
}
