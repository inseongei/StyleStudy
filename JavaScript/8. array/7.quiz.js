// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function changeItem(item, from, to) {
  const array = [...item];
  return array.map((item) => (item == from ? to : item));
}

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = changeItem(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array, item) {
  // filter 방법
  return array.filter((value) => value === item).length;

  // reduce 방법
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}

const result2 = count(["🍌", "🥝", "🍇", "🥝"], "🥝");
console.log(result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function exist(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}

const result3 = exist(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]);
console.log(result3);

// 퀴즈 4
// 5이상(보다 큰) 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result4 = nums
  .filter((item) => item > 5) // 16 25 34 21
  .reduce((acc, cur, _, array) => acc + cur / array.length, 0);

console.log(result4);
