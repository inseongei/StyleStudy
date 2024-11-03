/* 💢시간초과💢 */
function solution(array) {
  let obj = {};
  let max = 0;
  let numCheck = 0;
  if (array.length === 1) return array[0];
  for (let i = 0; i < array.length; i++) {
    if (!obj.hasOwnProperty(array[i])) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
  }

  for (let item in obj) {
    max = Math.max(max, obj[item]);
  }

  for (let item in obj) {
    obj[item] === max && numCheck++;
  }

  if (numCheck >= 2) return -1;

  for (let item in obj) {
    if (obj[item] === max) return parseInt(item);
  }
}

// 1. 객체를 만들어서 각각의 요소들이 몇번 나왔는지 확인
// 1-1. 객체의 값이 있는지 여부를 통해 없으면 초기값과 함께 만들고 있으면 + 1
// 2. 객체를 순회하면서 값들 중 가장 많이 나온 값을 찾는다
// 3. 많이 나온 값을 기준으로 객체를 순회하면서 해당되는 키 값을 리턴
