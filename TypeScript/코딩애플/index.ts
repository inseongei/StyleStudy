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

내함수(자료.name);
