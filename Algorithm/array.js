/** JavaScript 배열
 * 1. 일반적인 프로그래밍 언어에서의 배열로 이해할 수 있다.
 * 2. JavaScript의 배열은 일반 배열처럼 임의의 인덱스를 이용해 직접적인 접근이 가능하다.
 * 3. JavaScript의 배열은 동적 배열의 기능을 제공하며, 맨 뒤의 위치에 원소 추가가 가능하다. ( 크기에 영향을 받지 않음 )
 */

// 1️⃣ 대괄호 사용하기
let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

// 2️⃣ Array() 사용하기
let arr2 = new Array();

arr2.push(4);
arr2.push(5);
arr2.push(6);
console.log(arr2);

// 일반적인 변수 외에도 객체를 담을 수도 있다.
let arr3 = ["Hello", 777, true];
console.log(arr3);

// 임의의 크기를 가지는 배열도 만들수 있다.
let arr4 = [0, 1, 2, 3, 4];
let arr5 = Array.from({ length: 5 }, () => 7);
console.log(arr5);

// 2차원 리스트(배열) 만들기 - 1번째
let arr6 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];
console.log(arr6);

// 2차원 리스트(배열) 만들기 - 2번째
let arr7 = Array.from(Array(4), () => new Array(5));
console.log(arr7);

// push 메서드를 통해 배열의 가장 뒤쪽에 새로운 원소를 추가할 수 있다.
let arr8 = [5, 6, 7, 8, 9];
arr8.length = 8;
arr8[7] = 3;
arr8.push(1);
console.log(arr8);

// concat() : 여러개의 배열을 이어 붙여서 합친 결과를 반환한다. -> O(N)
let arr9 = [1, 2, 3, 4, 5];
let arr10 = [6, 7, 8, 9, 10];
let arr11 = arr9.concat(arr10, [11, 12]);
console.log(arr11);

// slice(left,right) : 특정 구간의 원소를 꺼낸 배열을 반환한다. -> O(N)
let arr12 = [1, 2, 3, 4, 5];
let result = arr12.slice(2, 4); // 2번째,3번째 원소를 반환 (끝은 미포함)
console.log(result); // 3,4

// indexOf() : 특정한 값을 가지는 원소의 첫번째 인덱스를 반환 -> O(N) , 만약 해당하는 원소가 없는 경우 -1을 반환
let arr13 = [7, 3, 5, 6, 6, 2, 1];
console.log(arr13.indexOf(5));
console.log(arr13.indexOf(3));
console.log(arr13.indexOf(0));
