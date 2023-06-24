interface Person {
  name: string;
}
interface PersonSpan extends Person {
  birth: Date;
  death: Date;
}

const personSpan: PersonSpan = {
  name: "Kim",
  birth: new Date(),
  death: new Date()
};

export default {};
