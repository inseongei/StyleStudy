// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// 카운터 클래스 만들어보기

class Counter {
  #value;
  constructor(Startvalue) {
    if (isNaN(Startvalue) || Startvalue < 0) {
      this.#value = 0;
    } else {
      this.#value = Startvalue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
console.log(counter.value);
