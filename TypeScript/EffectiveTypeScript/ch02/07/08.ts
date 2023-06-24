interface Identified {
  id: string;
}
interface Person {
  name: string;
}
interface PersonDetail {
  name: string;
  age: number;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const currentDate: Date = new Date();

const personSpan: PersonSpan = {
  name: "Lee",
  birth: currentDate
};

export default {};
