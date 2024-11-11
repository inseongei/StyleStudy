/* 시간초과💢 */
function solution(my_string, queries) {
  let strArr = my_string.split("");
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    let array = strArr.slice(s, e + 1).reverse();
    strArr.splice(s, e - s + 1, ...array);
  }

  return strArr.join("");
}
