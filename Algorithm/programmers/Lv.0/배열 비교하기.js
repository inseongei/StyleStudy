/* 05:32 / 10:00 */
function solution(arr1, arr2) {
  const arr1Num = arr1.reduce((one, ele) => (one += ele), 0);
  const arr2Num = arr2.reduce((one, ele) => (one += ele), 0);

  if (arr1.length === arr2.length) {
    if (arr1Num > arr2Num) {
      return 1;
    } else if (arr1Num < arr2Num) {
      return -1;
    } else {
      return 0;
    }
  } else {
    if (arr1.length > arr2.length) {
      return 1;
    } else if (arr1.length < arr2.length) {
      return -1;
    } else {
      return 0;
    }
  }
}

// 두 정수 배열의 대소관계
// 1. 두 배열의 길이가 다르다면 결국 배열의 길이가 긴 쪽이 큰거야
// 2. 길이가 같다면 각각의 원소의 합을 비교하는거고
// arr1 크면 1 arr2가 크면 -1
