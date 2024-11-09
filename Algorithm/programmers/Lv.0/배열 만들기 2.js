/* 시간초과💢 */
function solution(l, r) {
  let result = [];
  let isChecked = true;
  for (let i = l; i <= r; i++) {
    let numList = (i + "").split("");
    for (let j = 0; j < numList.length; j++) {
      if (numList[j] !== "5" && numList[j] !== "0") {
        isChecked = false;
        break;
      }
    }

    if (isChecked) result.push(i);
    isChecked = true;
  }
  return result.length === 0 ? [-1] : result;
}

// 1. l부터 r까지 반복을 하면서
// 2. 숫자를 문자로 변경하고 문자를 돌면서 각 자리 수를 체크한다.
// 3. isChecked라는 boolean 값을 두고 false 라면 break true 라면 result 배열에 넣어준다.
