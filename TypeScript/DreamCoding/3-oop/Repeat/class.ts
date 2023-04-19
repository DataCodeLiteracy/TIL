{
  type CoffeeCup = {
    shots: number;
    syrup: number;
    hasMilk: boolean;
    ice: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 6;
  // 전역으로 변수를 선언하게 되면 class안에서 변수를 사용할 때 헷갈리게 된다.
  // class 안에서는 this를 명시해주어서 class 안에서 변수를 사용할 수 있게 해야 한다.
  // let coffeeBeans = 300; // number 타입
  // let totalSyrup = 3;

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 6;
    coffeeBeans: number = 0;
    totalSyrup = 1000;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static hotAmericanoMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const hotAmericano = new CoffeeMaker(200);
  console.log(hotAmericano.makeCoffee(5, 2));

  const hotAmericano2 = CoffeeMaker.hotAmericanoMachine(100);
  console.log(hotAmericano2.totalSyrup);
  console.log(hotAmericano2.makeCoffee(1, 5));
}
