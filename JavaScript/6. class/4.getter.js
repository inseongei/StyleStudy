// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    // get : 함수지만 호출하는 시점에 데이터를 만들어서 반환한다.
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("인성", "정");

student.firstName = "안나";
console.log(student.firstName);
console.log(student.fullName); // 접근을 하면 get이 실행된다.
student.fullName = "정인성"; // 호출을 하면 set이 실행된다.
