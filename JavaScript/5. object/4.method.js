// 객체 안에서 자기 자신의 속성을 접근할땐 ✨this✨를 적어야 한다.
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name} : 🍎`);
  },
};

apple.display();
