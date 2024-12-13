/* 01:50 / 10:00 */
function solution(myString, pat) {
  let index = myString.lastIndexOf(pat);
  return myString.substring(0, index + pat.length);
}

// lastIndexOf
