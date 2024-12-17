/* 08:32 / 10:00 */
function solution(rank, attendance) {
  let result = [];
  let ans = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) result.push(rank[i]);
  }

  result.sort((a, b) => a - b);

  return (
    10000 * rank.indexOf(result[0]) +
    100 * rank.indexOf(result[1]) +
    rank.indexOf(result[2])
  );
}

// 0번부터 n -1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사
// 등수가 높은 3명을 선발해야 하지만 , 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있대
