{
  // 캡슐화를 통해 은닉화
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : 클래스에서 따로 작성하지 않으면 기본적으로 public 상태
  // private : 외부에서 보이지 않게 private (어떤 누구라도 접근할 수 없다)
  // protected : 외부에서는 접근할 수 없지만 클래스를 상속한 자식클래스에서만 접근이 가능하도록 설정
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class Level : 클래스와 연결이 되어 있기 때문에 오브젝트마다 생성되지 않음
    private coffeeBeans: number = 0; // instance (object) Level

    // constructor : class를 이용해서 오브젝트를 만들 때 항상 처음에 호출되는 것
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw Error("옳지 않은 나이");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  // 접근할때는 함수가 아니라 맴버 변수처럼 접근한다.
  user.age = 6;
  console.log(user.fullName); // Steve Jobs
}
