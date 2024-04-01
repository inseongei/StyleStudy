// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name} : 🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name} : 🍊`);
//   },
// };

// 생성자 함수 (대문자로 만들어줄 것)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };

  return this; // 생략해도 괜찮음
}

const apple = new Fruit("apple", "🍎");

console.log(apple);
console.log(apple.name); // 똑같이 접근가능
