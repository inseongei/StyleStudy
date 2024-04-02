// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수 (필요한 인자들이 전달)
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 인스턴스 레벨의 메서드 (모든 인스턴스에서 생성됨)
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };

  // 클래스 레벨의 메서드 (클래스에서 한번만 생성됨)
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음 (클래스 자체는 아무런 것도 채워지지 않은 템플릿)
    return new Fruit("banana", "🍌");
  }
}

const banana = Fruit.makeRandomFruit(); // 클래스의 이름을 통해서만 접근을 할 수 있다.
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
