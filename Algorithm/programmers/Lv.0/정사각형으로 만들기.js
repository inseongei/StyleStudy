/* 05:27 / 10:00 */
function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== arr.length) {
      for (let j = arr[i].length; j < arr.length; j++) {
        arr[i].push(0);
      }
    }
    result.push(arr[i]);
  }

  if (result.length !== arr[0].length) {
    let array = new Array(arr[0].length).fill(0);
    for (let j = result.length; j < arr[0].length; j++) {
      result.push(array);
    }
  }

  return result;
}
