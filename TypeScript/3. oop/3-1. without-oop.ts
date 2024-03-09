{
  // 절차지향적으로 커피 기계 함수 만들기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("커피 콩이 충분하지 않아요");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
