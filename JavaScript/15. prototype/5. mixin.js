// 오브젝트는 단 하나의 프로토타입을 가리킬 수 있다. ( 단하나의 부모만 가질 수 있다. )
// 하지만! 여러개의 함수들을 상속하고 싶다면 ? -> mixin

const play = {
  play: function () {
    console.log(`${this.name} 놀아요 !`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요 !`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep); // Dog 프로토타입에 play 객체 와 sleep 객체를 할당할꺼야
const dog = new Dog("멍멍");
console.log(dog);
dog.play(); // 둘다 사용 가능
dog.sleep(); // 둘다 사용 가능

// 클래스에서도 사용이 가능하다. - 겉보기엔 클래스지만 내부적으로는 프로토타입
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥");
tiger.sleep();
tiger.play();
