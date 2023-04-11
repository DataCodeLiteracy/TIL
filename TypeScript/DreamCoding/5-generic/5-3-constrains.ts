{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 X
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<E extends Employee>(employee: E): E {
    employee.pay();
    return employee;
  }

  const jonghyun = new FullTimeEmployee();
  const haeun = new PartTimeEmployee();
  jonghyun.workFullTime();
  haeun.workPartTime();

  const jonghyunAfterPay = payBad(jonghyun);
  jonghyunAfterPay.pay(); // pay만 가능..
  const jonghyunAfterPay2 = payBad(jonghyun) as FullTimeEmployee;
  jonghyunAfterPay2.workFullTime(); // as를 이용하면 다른 함수도 사용가능 하지만 as는 권장하지 않는다. (제네릭으로 해결..)
  const haeunAfterPay = payBad(haeun);

  const jonghyunAfterPay3 = pay(jonghyun);
  jonghyun.workFullTime(); // 이제는 as를 사용하지 않아도 가능하다. 이유는?
}

{
  const obj = {
    name: "jonghyun",
    age: 37
  };

  const obj2 = {
    animal: "dog"
  };

  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
  console.log(getValue(obj2, "animal"));

  // interface GetValue<O, P> {
  //   obj: O = {
  //     prop: P
  //   };
  // }

  function getValue<O, P extends keyof O>(obj: O, prop: P): O[P] {
    return obj[prop];
  }
}
