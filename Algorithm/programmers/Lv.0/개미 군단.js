/* 시간초과💢 */
function solution(hp) {
  let generalAnts = Math.floor(hp / 5);
  let remainder = hp % 5;

  let soldierAnts = Math.floor(remainder / 3);
  remainder = remainder % 3;

  let workerAnts = remainder;

  return generalAnts + soldierAnts + workerAnts;
}

/* 12:37 / 15:00 */
function solution(hp) {
  let FirstAnt = Math.floor(hp / 5);
  let SecondAnt = Math.floor((hp - FirstAnt * 5) / 3);

  return FirstAnt + SecondAnt + hp - (FirstAnt * 5 + SecondAnt * 3);
}

// 장군 개미 공격력 : 5
// 병정 개미 공격력 : 3
// 일 개미 공격력 : 1
