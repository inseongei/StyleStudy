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

/* 12:50 / 15:00 */
function solution(array) {
  let numSetArr = []; // 우리가 찾아야 할 요소의 중복 제거
  let maxList = []; // 각각의 요소들이 몇번 나왔는지 확인
  if (array.length === 1) return array[0];

  const num = new Set([...array]);

  for (let item of num) {
    numSetArr.push(item);
  }

  for (let i = 0; i < numSetArr.length; i++) {
    let num = 0;
    for (let j = 0; j < array.length; j++) {
      numSetArr[i] === array[j] && num++;
    }
    maxList.push(num);
  }

  const max = Math.max(...maxList); // 최빈 값
  let check = 0;

  for (let i = 0; i < maxList.length; i++) {
    maxList[i] === max && check++;
  }

  return check === 1 ? numSetArr[maxList.indexOf(max)] : -1;
}

// 1. array에서 우리가 검사해야 할 값을 찾는다. ( Set 객체 사용 )
// 2. Set 객체를 사용해서 각각의 요소의 최빈값 구한다. ( 배열에 저장 )
// 3. 배열을 돌면서 max값을 찾는다. ( Math.max )
// 4. max을 구해서 2번 배열을 돌면서 max 값이 몇개 인지 구한다. ( 1개나 2개일 경우의 값이 다름 )
