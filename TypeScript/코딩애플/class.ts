var nunu = {
  q: "consume",
  w: "snowball",
};

var garen = {
  q: "strike",
  w: "courage",
};

function 기계(q, w) {
  this.q = q;
  this.w = w;
}

기계.prototype.name = "kim";

// this : 기계로부터 생성되는 object ( instance )

// let test = new Name("inseong", "Jung");

/********************* 07-11(목) */
var 어레이 = [4, 2, 1];
var 어레이 = new Array(4, 2, 1);
// 배열에 메소드를 사용할 수 있는 이유 : sort나 length가 부모 유전자(프로토타입)에 기록이 되어 있기 때문

// Array.prototype.함수 = () => {};

// class 키워드
class Person {
  name: string;
  constructor() {
    this.name = "kim";
  }
}

new Person();

class Car {
  model: string;
  price: number;
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  tax() {
    this.price / 10;
  }
}

interface Square {
  color: string;
  width: number;
}

let 네모 = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Bucket {
  product: string;
  price: number;
}

interface Card {
  card: boolean;
}

let 장바구니: Bucket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
