/* 시간초과💢 */
function solution(keyinput, board) {
  let limitX = Math.trunc(board[0] / 2);
  let limitY = Math.trunc(board[1] / 2);

  let result = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left" && Math.abs(result[0]) > limitX) {
      result[0] -= 1;
    } else if (keyinput[i] === "right" && Math.abs(result[0]) < limitX) {
      result[0] += 1;
    } else if (keyinput[i] === "up" && Math.abs(result[1]) < limitY) {
      result[1] += 1;
    } else if (keyinput[i] === "down" && Math.abs(result[1]) > limitY) {
      result[1] -= 1;
    }
  }

  return result;
}

// up : y가 +1
// down : y가 -1
// left : x가 -1
// right : x가 +1
