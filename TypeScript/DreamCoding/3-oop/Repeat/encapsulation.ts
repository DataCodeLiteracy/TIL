{
  type CoffeeCup = {
    shots: number;
    syrup: number;
    hasMilk: boolean;
    ice: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 6;

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 6;
    private coffeeBeans: number = 0;
    private totalSyrup = 1000;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static hotAmericanoMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`value for beans should be greater than 0`);
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number, syrup: number): CoffeeCup {
      let beans = shots * BEANS_GRAM_PER_SHOT;
      if (this.coffeeBeans < beans) {
        throw new Error(
          `커피 콩이 충분하지 않습니다. ${
            beans - this.coffeeBeans
          }g 이상 채워야 커피를 드실 수 있습니다!`
        );
      }
      this.coffeeBeans -= beans;
      this.totalSyrup -= syrup;
      function checkIngredient(coffeeBeans: number, totalSyrup: number) {
        console.log(`남아 있는 커피콩은 ${coffeeBeans}g 입니다.`);
        if (totalSyrup < syrup) {
          console.log(
            `커피는 만들어졌지만 시럽이 ${totalSyrup + syrup}g 밖에 없습니다.`
          );
        } else {
          console.log(`남아 있는 시럽은 ${totalSyrup}g 입니다.`);
        }
      }
      checkIngredient(this.coffeeBeans, this.totalSyrup);
      return {
        hasMilk: false,
        ice: false,
        shots,
        syrup,
      };
    }
  }

  const maker = CoffeeMaker.hotAmericanoMachine(100);
  console.log(maker);
  maker.fillCoffeeBeans(100);
  console.log(maker);
}
