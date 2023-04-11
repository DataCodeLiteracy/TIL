{
  // either: a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  // class SimpleEither implements Either {
  //   constructor(private leftValue: number, private rightValue: number) {}
  //   left(): number {
  //     return this.leftValue;
  //   }
  //   right(): number {
  //     return this.rightValue;
  //   }
  // }

  // const either = new SimpleEither(4, 5);
  // const left = either.left(); // 4
  // const right = either.right(); // 5

  // console.log(left);
  // console.log(right);

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4, 5);
  const left = either.left(); // 4
  const right = either.right(); // 5

  console.log(left);
  console.log(right);

  const either2 = new SimpleEither("Lee", "JongHyun");
  const left2 = either2.left();
  const right2 = either2.right();
  console.log(left2);
  console.log(right2);

  const either3 = new SimpleEither("Lee", { name: "JongHyun", age: 37 });
  const left3 = either3.left();
  const right3 = either3.right();
  console.log(left3);
  console.log(right3);
}
