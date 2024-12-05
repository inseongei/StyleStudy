/* 02:09 / 15:00 */
function solution(myString, pat) {
  myString = myString.toUpperCase();
  pat = pat.toUpperCase();

  return myString.includes(pat) ? 1 : 0;
}

// myString에 pat이 포함되어 있는지를 봐야함
