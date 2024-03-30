// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복해서 실행

let num = 5;

while (num >= 0) {
  console.log(num);
  num--;
}

// while은 처음 조건이 맞을때만 시작한다.
let isActive = false;
let i = 0;
while (isActive) {
  console.log("아직 살아있다");
  if (i === 1000) {
    break;
  }
  i++;
}

// do- while : 맨처음 먼저 시작하고 나서 그다음 조건을 검사
do {} while (isActive);
{
  console.log("아직 살아있다");
}
