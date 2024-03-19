// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log("같이 놀자");
  }
}

class Tiger extends Animal {
  hunt() {
    console.log("호랭이 사냥중");
  }
}

const dog1 = new Dog("멍멍", "😃", "인성");
const tiger1 = new Tiger("어흥", "😡");

// 각자 자신의 함수 & 부모의 함수만 사용가능 ( 개와 호랑이는 서로 공유 ❌ )
dog1.play();
dog1.printName();
tiger1.hunt();
tiger1.printName();

Object.assign(dog1);
