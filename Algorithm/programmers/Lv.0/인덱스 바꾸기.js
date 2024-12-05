/* 05:04 / 15:00 */
function solution(my_string, num1, num2) {
  let strArr = Array.from(my_string);
  strArr.splice(num2, 1, my_string[num1]);
  strArr.splice(num1, 1, my_string[num2]);

  return strArr.join("");
}

// 문자열 my_string , 정수 num1 , num2
