/* 01:33 / 10:00 */
function solution(todo_list, finished) {
  let result = [];
  for (let i = 0; i < todo_list.length; i++) {
    !finished[i] && result.push(todo_list[i]);
  }
  return result;
}

// todo_list와 finished의 배열의 길이가 같기 때문에 true인것만 result로 넣어준다.
