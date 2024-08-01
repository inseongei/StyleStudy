let 이름: string = "kim";

let 이름배열: string[] = ["kim", "jung"];

let 객체: { name: string } = { name: " inseong" };

// name이라는 속성이 와도 되고 안와도 되고
let 타입옵션: { name?: string } = { name: " inseong" };

// 다양한 타입이 들어올 수 있게 하려면 : Union type
let 유니온: string | number = "kim"; //  문자 혹은 숫자

// 타입은 변수에 담아쓸 수 있음
type 앞글자대문자로 = string | number;
let 만든타입: 앞글자대문자로 = 123;

// 함수를 만들 때도 타입 지정 가능 ( 파라미터의 타입 지정 , 리턴값의 타입 지정 )
function 함수(x: number): number {
  return x * 2;
}

// 배열에 쓸 수 있는 tuple 타입 : 배열에 오는 요소들의 타입을 엄격하게 지정
type Member = [number, boolean];
let john: Member = [1, true];

// 객체에 타입지정해야할 속성이 너무 많을 경우
type Member2 = {
  [key: string]: string;
};

let john2: Member2 = { name: "kim" };

// class 문법
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

type objpro = {
  member: string[];
  days: number;
  started: boolean;
};

let project: objpro = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원들: (number | string)[] = [1, "2", 3];

type school = {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
};

let 학교: school = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

/********************************************************************* */
function numfn(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

numfn(2);

/*********************************************************************07-09*/
function clearFn(arr: (number | string)[]): number[] {
  let array: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      array.push(Number(arr[i]));
    } else if (typeof arr[i] === "number") {
      array.push(arr[i] as number);
    }
  }

  return array;
}

// 예시 호출
console.log(clearFn(["1", 2, "3"])); // [1, 2, 3]

// type alias - 길고 복잡할 때 사용
let 동물: string | number | undefined;

type Animal = string | number | undefined;
let 동물2: Animal = 123;

// ReadOnly
type human = {
  readonly name: string;
};

const person: human = {
  name: "인성",
};

type Check = {
  name: string;
  phone: number;
  email: string;
  age: boolean;
};

let 이름3: 123;

function testFn(text: "a" | "b") {
  // ...
}

function game(what: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  // ...
  return ["가위"];
}

var 자료 = {
  name: "kim",
};

자료.name;

function 내함수(a: "kim") {}

// 내함수(자료.name);

/*********************************************************************07-10*/

// string 타입의 매개변수를 받아와서 number 타입으로 뱉는 함수
type 함수타입 = (a: string) => number;

let fn: 함수타입 = function (a) {
  return 10;
};

let 회원정보 = {
  name: "Jung",
  plusOne(a): number {
    return a + 1;
  },
  changeName: () => {},
};

회원정보.plusOne(2);

type Cut = (str: string) => string;

let cutfn: Cut = function (str) {
  if (str[0] === "0") {
    return str.slice(1, str.length);
  }
};

/*********************************07-13 */

let person2 = { student: true, age: 20 };

function Max(...num: number[]): number {
  return Math.max(...num);
}

/*********************************07-14 */
type Fish = { swim: string };
type Bird = { fly: string };

function 함수3(animal: Fish | Bird) {}

type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수4(x: Car | Bike) {
  if (x.wheel === "4개") {
  }
}

/*****************************07-20 */
class User2 {
  name;
  constructor() {
    this.name = "kim";
  }
}

class Person {
  constructor(public name) {
    // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입
  }
}

let 자식 = new Person("inseong");

class User3 {
  protected x = 10;
}

class NewUser extends User3 {
  doThis() {
    this.x = 20;
  }
}

class User4 {
  static x = 10;
  y = 20;
}

let 자식2 = new User4();

class HomeWork {
  static skill = "js";
  intro = HomeWork.skill + "전문가입니다.";

  constructor(a) {
    a + this.intro;
  }
}

let 인성 = new HomeWork("js");

/*********************07-21 */
function fn2<MyType extends number>(x: unknown[]) {
  return x[0];
}

let a = fn2<number>([4, 2]);
console.log(a);

interface LengthCheck {
  length: number;
}

let 멍멍: (string | boolean)[] = ["dog", true];

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

/**************************** 07-31 */
import { Age } from "./test.d";

let age: Age;

let 이름4: string = "김";

/********************************08-01 */

interface StringOnly {
  name: string;
  age: string;
  location: string;
}

let user = {
  name: "kim",
  age: "20",
  location: "seoul",
};

let obj = { name: "kim", age: 20 };
Object.keys(obj); // name, age

interface Person {
  age: number;
  name2: string;
}

type PersonKeys = keyof Person; // "age" | "name2"
let n: PersonKeys = "age";

type Car2 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car2>;

type Age<T> = T extends string ? string : unknown;

let abc1: Age<string>;
let abc2: Age<number>; // number는 string이 아니기 때문에 unknown

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

type 타입추출<T> = T extends () => (infer R)[] ? R : unknown;

type a = 타입추출<() => void>;
