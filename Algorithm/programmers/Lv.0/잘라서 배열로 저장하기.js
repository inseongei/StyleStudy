/* 01:24 / 10:00 */
function solution(my_str, n) {
  let result = [];

  for (let i = 0; i < my_str.length; i += n) {
    let str = my_str.substring(i, i + n);
    result.push(str);
  }
  return result;
}

// 문자열 my_str과 n이 매개변수로 주어질 때 , my_str을 길이 n씩 잘라서 저장한 배열
