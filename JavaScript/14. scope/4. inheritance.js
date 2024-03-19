// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji);
  Animal.call(this, name, emoji); // 내 this를 사용해줘
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log("같이 놀자");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype); // Animal에 함수들을 상속받음
Tiger.prototype.hunt = () => {
  console.log("호랭이 사냥중");
};
const dog1 = new Dog("멍멍", "😃", "인성");
dog1.play();
dog1.printName();
const tiger1 = new Tiger("어흥", "😡");
tiger1.printName(); // Animal꺼 쓰는거고 (부모꺼 상속할수 있다는 거 )
tiger1.hunt(); // 자기꺼 쓰는거

// 해당 객체가 누구의 프로토타입을 상속하는지 확인
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
