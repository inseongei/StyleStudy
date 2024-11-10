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

/* 04:58 / 15:00 */
function solution(l, r) {
  let result = [];
  let isChecked = true;

  for (let i = l; i <= r; i++) {
    let str = i + "";
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== "0" && str[j] !== "5") {
        isChecked = false;
        break;
      }
    }
    if (isChecked) result.push(i);
    isChecked = true;
  }
  return result.length === 0 ? [-1] : result;
}

// 1. l부터 r까지 반복을 한다.
// 2. for문의 i 요소를 문자열로 만들고 반복해준다. ( 이중 반복문 )
// 3. 해당 문자열의 각 요소가 0 과 5가 있는지를 확인 ( AND )
// 4. 없다면 boolean 값을 false 바꾸고 result에 넣어준다.
