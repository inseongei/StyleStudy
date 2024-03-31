{
  // 주어진 숫자 만큼 0부터 순회하는 함수
  // 순회하면서 주어진 특정한 일을 수행해야 한다
  // ex. 5, 순회하는 숫자를 다 출력하고 싶음
  // ex. 5, 순회하는 숫자의 2배값을 다 출력하고 싶음

  // 강의 해설 보기 전

  const print = (max) => {
    for (let i = 1; i <= max; i++) {
      console.log(i);
    }
  };

  const twoprint = (max) => {
    for (let i = 1; i <= max; i++) {
      console.log(i * 2);
    }
  };

  function iterate(max, action) {
    action(max);
  }

  // 강의 해설 본 후
  function iterate2(max, action) {
    for (let i = 0; i < max; i++) {
      action(i);
    }
  }

  function log(num) {
    console.log(num);
  }

  function doubleAndLog(num) {
    console.log(num * 2);
  }

  // iterate2(3, log);
  iterate2(3, doubleAndLog);

  // 콜백 함수 예제
  setTimeout(() => {
    console.log("3초뒤 실행");
  }, 3000);
}
