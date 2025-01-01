/* 02:48 / 10:00 */
function solution(order) {
  let result = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) {
      result += 5000;
    } else {
      result += 4500;
    }
  }
  return result;
}

// americano(4500)와 cafelatte(5000)
// 아무거나 === 아메카리노
