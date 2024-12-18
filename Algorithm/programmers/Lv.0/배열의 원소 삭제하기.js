/* 03:44 / 10:00 */
function solution(arr, delete_list) {
  let result = [];
  let isChecked = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < delete_list.length; j++) {
      if (arr[i] === delete_list[j]) isChecked = false;
    }
    if (isChecked) result.push(arr[i]);
    isChecked = true;
  }

  return result;
}

// 정수 배열 arr과 delete_list
