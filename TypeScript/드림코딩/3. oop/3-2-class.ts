{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class Level : 클래스와 연결이 되어 있기 때문에 오브젝트마다 생성되지 않음
    coffeeBeans: number = 0; // instance (object) Level

    // constructor : class를 이용해서 오브젝트를 만들 때 항상 처음에 호출되는 것
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}

/** 각각의 클래스 인스턴스에 같은 값이 있다면 ?
 * 공유가 될수 있는 요소들을 static 으로 두면 클래스 레벨로 된다.
 * 클래스 레벨의 static 요소는 사용할때 클래스안에 있는 this안에 있는게 아니라 클래스 자체에 있는 것이기 때문에 클래스이름.을 써야 한다.
 * 오브젝트마다 새로 만들어져 있는 데이터가 있다면 맴버 변수로 만들면 되고 클래스 레벨에서 함께 공유할 수 있는거라면 static으로 작성할 것
 * static은 맴버 변수 뿐만이 아니라 함수에도 적용이 가능하다.
 */
