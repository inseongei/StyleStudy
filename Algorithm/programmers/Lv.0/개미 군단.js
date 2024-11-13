/* 시간초과💢 */
function solution(hp) {
  let generalAnts = Math.floor(hp / 5);
  let remainder = hp % 5;

  let soldierAnts = Math.floor(remainder / 3);
  remainder = remainder % 3;

  let workerAnts = remainder;

  return generalAnts + soldierAnts + workerAnts;
}
