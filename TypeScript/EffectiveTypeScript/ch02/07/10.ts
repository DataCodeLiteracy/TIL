interface Identified {
  id: string;
}
interface Person {
  name: string;
}
interface Lifespan {
  name: string;
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
type K = keyof (Person | Lifespan); // Type is never
type KI = keyof (Person & Lifespan);
type U = Person | Lifespan;
type I = Person & Lifespan;

const kn: K = "name";
const kb: K = "birth";

const kin: KI = "name";
const kib: KI = "birth";
const kid: KI = "death";

const u: U = {
  name: "u"
  // birth: new Date()
};

const i: I = {
  name: "I",
  birth: new Date()
};

export default {};

/**
 * 요약
 *
 * key of (A&B) = (keyof A) | (keyof B)
 * key of (A|B) = (keyof A) & (keyof B)
 *
 * Union은 두 인터페이스(타입) 중에 하나만 충족하면 된다. Intersection은 두 인터페이스(타입)을 모두 충족해야 한다.
 */
