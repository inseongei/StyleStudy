const dog = { name: "체리", age: 7 };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog); // dog라는 객체안에 name 이라는 키가 있는지 확인할 때
console.log(dog.hasOwnProperty("name"));

console.clear();
// 객체의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
/** 기본값 전부 true
 * writable : 값을 수정할 수 있는지
 * enumerable : 값을 열거 할 수 있는지
 * configurable : 값을 완전히 수정 또는 삭제할 수 있는지
 */
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false, // 안쓰면 True
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name); // 삭제가 안됨

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});

console.log(student);

// Key Point : 객체의 특정 요소가 삭제하면 안되거나 수정되면 안될 때 세밀하게 할수 있다.
