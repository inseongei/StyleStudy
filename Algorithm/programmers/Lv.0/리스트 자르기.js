/* 07:38 / 10:00 */
function solution(n, slicer, num_list) {
  let array = [];
  switch (n) {
    case 1:
      return num_list.slice(0, slicer[1] + 1);
    case 2:
      return num_list.slice(slicer[0], num_list.length + 1);
    case 3:
      return num_list.slice(slicer[0], slicer[1] + 1);
    case 4:
      for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
        array.push(num_list[i]);
      }
      return array;
  }
}

// 정수 n과 정수 3개가 담긴 리스트 slicer
// 정수 여러 개가 담긴 리스트 num_list

// 1. 스위치 case 문을 사용해서 조건에 맞게 구현
