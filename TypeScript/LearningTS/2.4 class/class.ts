class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("Miss Frizzle"); // OK

// new Greeter().greet(); 
// Error: Expected 1 arguments, but got 0.
// 1개의 인수가 필요한데 0개를 가져왔습니다.ts(2554)

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}`);
  }
}

new Greeted("take chances, make mistakes, get messy");

// new Greeted();
// Error: Expected 1 arguments, but got 0.
// 1개의 인수가 필요한데 0개를 가져왔습니다.ts(2554)

class FieldTrip {
  destination: string;

  constructor(destination: string) {
    this.destination = destination // OK
    console.log(`We're going to ${this.destination}!`);

    // this.nonexistent = destination;
    // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
    // 'FieldTrip' 형식에 'nonexistent' 속성이 없습니다.ts(2339)
  }
}

const trip = new FieldTrip("planetarium");

trip.destination; // OK

// trip.nonexistent;
// Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
// 'FieldTrip' 형식에 'nonexistent' 속성이 없습니다.ts(2339)

class WithMethod {
  myMethod() {
  }
}

new WithMethod().myMethod === new WithMethod().myMethod; // true

class WithProperty {
  // myProperty: () => {}
}

// new WithProperty().myProperty === new WithProperty().myProperty; // false

class WithPropertyParameters {
  takesParameters = (input: boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();

instance.takesParameters(true); // OK

// instance.takesParameters(123);
// Error: Argument of type 'number' is not assignable to parameter of type 'boolean'.
// 'number' 형식의 인수는 'boolean' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

class WithValue {
  immediate = 0; // OK
  later: number; // OK(constructor에서 할당)
  mayBeUndefined: number | undefined; // OK(undefined가 되는 것이 허용됨)
  // unused: number;
  // Error: Property 'unused' has no initializer and is not definitely assigned in the constructor.
  // 속성 'unused'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.ts(2564)

  constructor() {
    this.later = 1;
  }
}

class MissingInitializer {
  // property: string;
}

// new MissingInitializer().property.length;
// TypeError: Cannot read property 'length' of undefined

class ActivitiesQueue {
  pending!: string[]; // OK
  
  initialize(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

const activities = new ActivitiesQueue();

activities.initialize(['eat', 'sleep', 'learn']);
activities.next();

class MissingInitializer2 {
  property?: string;
}

new MissingInitializer2().property?.length; // OK
// new MissingInitialize2().property.length;
// Error: Object is possibly 'undefined'

class Quote {
  readonly text: string;

  constructor(text: string) {
    this.text = '';
  }

  emphasize() {
    this.text += '|';
    // Error: Cannot assign to 'text' because it is a read-only property.
    // 읽기 전용 속성이므로 'text'에 할당할 수 없습니다.ts(2540) 
  }
}

const quote = new Quote (
  "There is a brilliant child locked inside every student."
)

// Quote.text = "Hai";
// Error: Property 'text' does not exist on type 'typeof Quote'.
// 'typeof Quote' 형식에 'text' 속성이 없습니다.ts(2339)

class RandomQuote {
  readonly explicit: string = "Home is the nicest word there is.";
  readonly implicit = "Home is the nicest word there is.";

  constructor() {
    if (Math.random() > 0.5) {
      this.explicit = "We start learning the minute we're born."; // OK
      
      // this.implicit = "We start learning the minute we're born"; 
      // Error: ype '"We start learning the minute we're born"' is not assignable to type 
      //  '"Home is the nicest word there is."'.
      // '"We start learning the minute we're born"' 형식은 '"Home is the nicest word there is."' 
      // 형식에 할당할 수 없습니다.ts(2322)
    }
  }
}

const quote2 = new RandomQuote();

quote2.explicit; // 타입: string
quote2.implicit; // 타입: "Home is the nicest word there is."

class Teacher {
  sayHello() {
    console.log("Take chances, make mistakes, get messy!");
  }
}

let teacher: Teacher;

teacher = new Teacher(); // OK

teacher = "Wahoo!";
// Error: Type 'string' is not assignable to type 'Teacher'.
// 'string' 형식은 'Teacher' 형식에 할당할 수 없습니다.ts(2322)

class SchoolBus {
  getAbilities() {
    return ["magic", "shapeshifting"];
  }
}

function withSchoolBus(bus: SchoolBus) {
  console.log(bus.getAbilities());
}

withSchoolBus(new SchoolBus()); // OK

// OK
withSchoolBus({
  getAbilities: () => ["transmogrification"],
});

withSchoolBus({
  getAbilities: () => 123,
  // Error: Type 'number' is not assignable to type 'string[]'.
  // 'number' 형식은 'string[]' 형식에 할당할 수 없습니다.ts(2322)
});