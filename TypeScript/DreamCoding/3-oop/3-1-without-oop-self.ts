{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      // shots: shots,
      shots,
      hasMilk: false
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
  console.log(coffeeBeans);
}

{
  let bean: string = "kenya";
  class CoffeeMachine {
    makeCoffee(shot: number) {
      console.log(`${shot}shot ${bean} Coffee가 완성되었습니다.`);
    }
  }

  const kenyaMachine = new CoffeeMachine();
  kenyaMachine.makeCoffee(2);
}
