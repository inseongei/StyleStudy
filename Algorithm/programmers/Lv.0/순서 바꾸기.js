/* 03:09 / 15:00 */
function solution(num_list, n) {
  let OneArr = num_list.slice(n, num_list.length);
  let TwoArr = num_list.slice(0, n);

  return [...OneArr, ...TwoArr];
}

// 정수 리스트 num_list , 정수 n
// num_list를 n번째 원소 이후의 원소들과 n번째 까지의 원소들로 나눠 n번째 원소 이후의 원소들을 n번째까지의 원소들 앞에 붙인다.

// 1. num_list를 n번째 원소 이후의 원소들
// 2. n번째까지의 원소들로 나눠
// 3. 1번과 2번을 붙인다.
