// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름(name), 부서이름(department), 한달 근무 시간(hoursPerMonth)
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10,000원 : type -> 1
// 파트타임 직원은 시간당 8000원 type -> 2
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay = () => {
    return this.hoursPerMonth * this.payRate;
  };
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const inseong = new FullTimeEmployee("인성", "S/W", 30);
const bob = new PartTimeEmployee("밥", "Design", 20);

console.log(inseong.calculatePay());
console.log(bob.calculatePay());
