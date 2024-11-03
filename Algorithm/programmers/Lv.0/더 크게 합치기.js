/* 1:17 / 10:00 */
function solution(a, b) {
  let aNum = String(a) + String(b);
  let bNum = String(b) + String(a);
  return Math.max(aNum, bNum);
}

// 1. 숫자 두개를 합친다는 것은 문자열로 변환해야 서로를 문자형식대로 합쳐줄 수 있다.
// 2. aNum과 bNum 두개를 만든다음 Math.max 메소드를 사용해 큰 값을 리턴해주면 된다.
