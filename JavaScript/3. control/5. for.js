/** 반복문 Loop Statement
 * for(변수선언문; 조건식; 증감식;) {  }
 * 실행순서
 * 1. 변수선언문
 * 2. 조건식의 값이 참이면 { } 코드블럭을 수행
 * 3. 증감식을 수행
 * 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함
 */

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 : for(;;){}
// for (;;) {
//   console.log("하이");
// }

// 반복문 제어 : continue , break;
// continue가 나오는 순간 그 아래의 코드들은 무시되며, 바로 그 다음으로 i를 증가시켜 다음 반복문으로 넘어간다.
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i가 드디어 10이 되었다.");
    continue;
    break;
  }
  console.log(i);
}
