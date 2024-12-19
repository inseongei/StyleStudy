/* 02:03 / 10:00 */
function solution(date1, date2) {
  let datenum1 = +date1.join("");
  let datenum2 = +date2.join("");

  return datenum1 < datenum2 ? 1 : 0;
}

// 정수 배열 date1 < date2
