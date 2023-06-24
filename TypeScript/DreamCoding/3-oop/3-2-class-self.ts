{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  class coffeeMachine {
    // coffeeBeans: number;
    // shots: number;
    // constructor(coffeeBeans: number, shots: number) {
    //   this.coffeeBeans = coffeeBeans;
    //   this.shots = shots;
    // }

    makeCoffee(coffeeBeans: number, shots: number) {
      if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const coffee = new coffeeMachine();
  console.log(coffee.makeCoffee(21, 2));
}
