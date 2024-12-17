/* 시간초과💢 */
function solution(spell, dic) {
  // spell을 정렬된 문자열로 변환
  const target = spell.sort().join("");

  // dic 배열의 각 단어를 정렬한 후 비교
  for (let word of dic) {
    if (word.split("").sort().join("") === target) {
      return 1; // 조건에 맞는 단어가 있다면 1 반환
    }
  }
  return 2; // 조건에 맞는 단어가 없다면 2 반환
}
