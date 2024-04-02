// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀기");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("노랑이");
console.log(tiger);
// 상속 받은 Animal에 대해서 함수들을 사용할 수 있다.
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모를 가리킨다.
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀기");
  }

  // 부모의 eat 함수를 상속 받고 내 스타일 대로 사용할 수 있다. - 오버라이딩
  eat() {
    super.eat();
    console.log("강아지가 먹는 중");
  }
}

const dog = new Dog("갈색", "인성");

console.log(dog);
dog.eat();
dog.sleep();
dog.play();
