/* 03:58 / 10:00 */
function solution(letter) {
  let answer = "";
  let morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let array = letter.split(" ");
  for (let i = 0; i < array.length; i++) {
    answer += morse[array[i]];
  }

  return answer;
}

// 1. 모스부호를 공백을 기준으로 배열 형태로 만들어준다
// 2. 해당 배열을 반복하면서 morse 객체의 키의 값으로 answer 문자열에 저장해준다.
