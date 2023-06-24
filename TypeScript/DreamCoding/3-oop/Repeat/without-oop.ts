{
  type CoffeeCup = {
    shots: number;
    syrup: number;
    hasMilk: boolean;
    ice: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 5;

  let coffeeBeans: number = 0;
  coffeeBeans = 100;

  function makeCoffee(shots: number, syrup: number): CoffeeCup {
    let beans = shots * BEANS_GRAM_PER_SHOT;
    if (coffeeBeans < beans) {
      throw new Error(`Not enough coffee beans!`);
    }
    coffeeBeans -= beans;
    function checkBeans(coffeeBeans: number) {
      console.log(`남아있는 커피콩은 ${coffeeBeans} g입니다.`);
    }
    checkBeans(coffeeBeans);
    return {
      shots,
      syrup,
      hasMilk: false,
      ice: false,
    };
  }

  const americano = makeCoffee(3, 2);
  console.log(americano);
}

{
  type CoffeeCup = {
    shots: number;
    syrup: number;
    hasMilk: boolean;
    ice: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 5;

  let coffeeBeans: number = 0;
  coffeeBeans = 200;

  function makeHotAmericano(shots: number, syrup: number): CoffeeCup {
    let beans = shots * BEANS_GRAM_PER_SHOT;
    if (coffeeBeans < beans) {
      throw new Error(
        `Not enough coffee beans! 커피를 드시려면 ${
          beans - coffeeBeans
        }g 이상 채워야 합니다.`
      );
    }
    coffeeBeans -= beans;

    function checkBeans(coffeeBeans: number) {
      console.log(`남아있는 커피콩은 ${coffeeBeans}g 입니다.`);
    }
    checkBeans(coffeeBeans);

    return {
      shots,
      syrup,
      hasMilk: false,
      ice: false,
    };
  }

  const hotAmericano = makeHotAmericano(1, 2);
  console.log(hotAmericano);
}

{
  type CoffeeCup = {
    shots: number;
    syrup: number;
    hasMilk: boolean;
    ice: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 6;
  // let coffeeBeans: number = 0;
  // 이 경우에 300으로 초기화해서 number 타입으로 추론하는 것 같음..
  let coffeeBeans = 300; // number 타입
  let totalSyrup = 3;

  function makeHotAmericano(shots: number, syrup: number): CoffeeCup {
    let beans = shots * BEANS_GRAM_PER_SHOT;
    if (coffeeBeans < beans) {
      throw new Error(
        `커피 콩이 충분하지 않습니다. ${
          beans - coffeeBeans
        }g 이상 채워야 커피를 드실 수 있습니다!`
      );
    }
    coffeeBeans -= beans;
    totalSyrup -= syrup;
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
    checkIngredient(coffeeBeans, totalSyrup);
    return {
      hasMilk: false,
      ice: false,
      shots,
      syrup,
    };
  }

  const hotAmericano = makeHotAmericano(2, 5);
  console.log(hotAmericano);
}
