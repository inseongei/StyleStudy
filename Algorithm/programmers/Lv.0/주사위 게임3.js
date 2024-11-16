/* 시간초과💢 */
function solution(a, b, c, d) {
  let array = [a, b, c, d];
  let frequency = {};

  // 등장 빈도 카운트
  array.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  // 빈도수를 기준으로 배열을 생성
  let values = Object.keys(frequency).map(Number);
  let counts = Object.values(frequency);

  if (counts.length === 1) {
    // 모든 숫자가 같다면 1111 * p
    return 1111 * values[0];
  } else if (counts.length === 2) {
    if (counts.includes(3)) {
      // 세 주사위는 같고 나머지 하나는 다른 경우
      let p = values[counts.indexOf(3)];
      let q = values[counts.indexOf(1)];
      return (10 * p + q) ** 2;
    } else {
      // 두 개씩 같은 경우
      let [p, q] = values;
      return (p + q) * Math.abs(p - q);
    }
  } else if (counts.length === 3) {
    // 두 주사위는 같고 나머지 두 주사위는 각각 다른 경우
    let q = values[counts.indexOf(1)];
    let r = values[counts.lastIndexOf(1)];
    return q * r;
  } else {
    // 모든 숫자가 다 다른 경우
    return Math.min(...values);
  }
}

/* 시간초과💢 */
function solution(a, b, c, d) {
  let result = new Array(6).fill(0);
  let array = [a, b, c, d];
  for (let i = 0; i < array.length; i++) {
    result[array[i] - 1]++;
  }

  let numCheck = result.filter((item) => item !== 0).length;

  if (numCheck === 1) {
    return +(a + "" + (b + "") + (c + "") + (d + ""));
  } else if (numCheck === 3) {
    let answers = 1;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === 1) answers *= i + 1;
    }
    return answers;
  } else if (numCheck === 4) {
    return Math.min(a, b, c, d);
  } else {
    if (result.includes(3)) {
      let maxNum = result.indexOf(3) + 1;
      let minNum = result.indexOf(1) + 1;
      return (10 * maxNum + minNum) ** 2;
    } else {
      let test = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i] === 2) test.push(i + 1);
      }
      return Math.abs((test[0] - test[1]) * (test[0] + test[1]));
    }
  }
}

// 1. abcd가 전부 같을 경우  1
// 2. abcd 중에 3개가 같을 경우 2
// 3. 2개씩 같을 경우
// 4. 2개와 하나 하나 일 경우
// 5. 다 다를 경우
