interface Learner {
  name: string;
  study(hours: number): void;
}

class Student implements Learner {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  study(hours: number) {
    for (let i = 0; i < hours; i += 1){
      console.log("...studying...");
    }
  }
}

// class Slacker implements Learner {
  // Error:
  // 'Slacker' 클래스가 'Learner' 인터페이스를 잘못 구현합니다.
  // 'Slacker' 형식에 'Learner' 형식의 name, study 속성이 없습니다.ts(2420)
// }

// class Student2 implements Learner {
//   name; 
//   // Error: 
//   // 'name' 멤버에는 암시적으로 'any' 형식이 포함됩니다.ts(7008)
//   study(hours) {
//     // Error: 
//     // hours'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
//     //'hours' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006)
//   }
// }

interface Graded {
  grades: number[];
}

interface Reporter{
  report: () => string;
}

class ReportCard implements Graded, Reporter {
  grades: number[];
  
  constructor(grades: number[]) {
    this.grades = grades;
  }
  report() {
    return this.grades.join(", ");
  }
  
}

// class Empty implements Graded, Reporter { }
// Error: Class 'Empty' incorrectly implements interface 'Reporter'.
//  Property 'report' is missing in type 'Empty' but required in type 'Reporter'

interface AgeIsANumber {
  age: number;
}

interface AgeIsNotANumber {
  age: () => string;
}

// class AsNumber implements AgeIsANumber, AgeIsNotANumber {
  // age = 0;
  // Error:  Property 'age' in type 'AsNumber' is not assignable to the same property in base type 'AgeIsNotANumber'.
  // Type 'number' is not assignable to type '() => string'.
// }

// class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
  // age() { return ''; }
  // Error: Property 'age' in type 'NotAsNumber' is not assignable to the same property in base type 'AgeIsANumber'.
  // Type '() => string' is not assignable to type 'number'.
// }

{
  class Teacher {
    teach() {
      console.log("The surest test of discipline is its absence.");
    }
  }

  class StudentTeacher extends Teacher {
  learn() {
    console.log("I cannot afford the luxury of a closed mind.");
  }
}

  const teacher = new StudentTeacher();

  teacher.teach(); // OK(기본 클래스에 정의됨)
  teacher.learn(); // OK 하위 클래스에 정의됨)

  // teacher.other();
  // Error: Property 'other' does not exist on type 'StudentTeacher'.
  // 'StudentTeacher' 형식에 'other' 속성이 없습니다.ts(2339)
}

{
  class Lesson {
    subject: string;

    constructor(subject: string) {
      this.subject = subject;
    }
  }

  class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
      super(subject);
      this.url = url;
    }
  }

  let lesson: Lesson;
  lesson = new Lesson("coding"); // OK
  lesson = new OnlineLesson("coding", "oreilly.com"); // OK

  let online: OnlineLesson;

  online = new OnlineLesson("coding", "oreilly.com"); // OK)

  // online = new Lesson("coding");
  // Error: Property 'url' is missing in type 'Lesson' but required in type 'OnlineLesson'.
  // 'url' 속성이 'Lesson' 형식에 없지만 'OnlineLesson' 형식에서 필수입니다.ts(2741)
}

{
  class PastGrades {
    grades: number[] = [];
  }

  class LabeledPastGrades extends PastGrades {
    label?: string;
  }

  let subClass: LabeledPastGrades;

  subClass = new LabeledPastGrades(); // OK
  subClass = new PastGrades(); // OK
}

{
  class GradeAnnouncer {
    messgage: string;

    constructor(grade: number) {
      this.messgage = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
  }

  class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
      super(100);
    } 
  }

  class FailingAnnouncer extends GradeAnnouncer {
    // constructor() { }
    // Error: Constructors for derived classes must contain a 'super' call.
    // 파생 클래스의 생성자는 'super' 호출을 포함해야 합니다.ts(2377)
  }
}

{
  class GradesTally {
    grades: number[] = [];

    addGrades(...grades: number[]) {
      this.grades.push(...grades);
      return this.grades.length;
    }
  }

  class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
      // this.grades = [...previousGrades];
      // Error: 'super' must be called before accessing 'this' in the constructor of a derived class.
      // 파생 클래스의 생성자는 'super' 호출을 포함해야 합니다.ts(2377)
    super();

    console.log("Starting with length", this.grades.length); // OK
    }
    
  }
}

// {
  class GradeCounter {
    countGrades(grades: string[], letter: string) {
      return grades.filter(grade => grade === letter).length;
    }
  }

  class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
      return super.countGrades(grades, "F");
    }
  }

  class AnyFailureChecker extends GradeCounter {
    // countGrades(grades: string[]) {
      // Error:  Property 'countGrades' in type 'AnyFailureChecker' is not assignable to the same property in base type 'GradeCounter'.
      //  Type '(grades: string[]) => void' is not assignable to type '(grades: string[], letter: string) => number'.
      //  Type 'void' is not assignable to type 'number'.
      // 'AnyFailureChecker' 형식의 'countGrades' 속성을 기본 형식 'GradeCounter'의 동일한 속성에 할당할 수 없습니다.
      //  '(grades: string[]) => void' 형식은 '(grades: string[], letter: string) => number' 형식에 할당할 수 없습니다.
      //  'void' 형식은 'number' 형식에 할당할 수 없습니다.ts(2416)
    }
  

  // const counter: GradeCounter = new AnyFailureChecker();
  
  // 예상한 타입: number;
  // 실제 타입: boolean
  // const count = counter.countGrades(["A", "B", "F"]);
// }

{
  class Assignment {
    grade?: number;
  }

  class GradeAssignment extends Assignment {
    grade: number;

    constructor(grade: number) {
      super();
      this.grade = grade;
    }
  }
}

{
  class NumericGrade {
    value = 0;
  }

  class VagueGrade extends NumericGrade {
    // value = Math.random() > 0.5 ? 1 : '...';
    // Error: Property 'value' in type 'VagueGrade' is not assignable to the same property in base type 'NumericGrade'.
    //  Type 'string | number' is not assignable to type 'number'.
    //  Type 'string' is not assignable to type 'number'.
    // 'VagueGrade' 형식의 'value' 속성을 기본 형식 'NumericGrade'의 동일한 속성에 할당할 수 없습니다.
    // 'string | number' 형식은 'number' 형식에 할당할 수 없습니다.
    //  'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2416)
  }

  // const instance: NumericGrade = new VagueGrade();

  // 예상한 타입: number;
  // 실제 타입: number | string;
  // instance.value;
}

{
  abstract class School {
    readonly name: string;

    constructor(name: string) {
      this.name = name;
    }

    abstract getStudentType(): string[];
  }

  class Preschool extends School {
    getStudentType() {
      return ["preschooler"];
    }
  }

  // class Absence extends School {
    // Error: Non-abstract class 'Absence' does not implement inherited abstract member 'getStudentType' from class 'School'.
    // 'Absence'이(가) 선언되었지만 사용되지 않았습니다.ts(6196)
    // Non-abstract class 'Absence' does not implement all abstract members of 'School'ts(18052)
  // }
}

{
  abstract class School {
    readonly name: string;

    constructor(name: string) {
      this.name = name;
    }

    abstract getStudentType(): string[];
  }

  class Preschool extends School {
    getStudentType() {
      return ["preschooler"];
    }
  }

  let school: School;

  school = new Preschool("Sunnyside Daycare"); // OK

  // school = new School("somewhere else");
  // Error: Cannot create an instance of an abstract class.
  // 추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511)
}

{
  class Base {
    isPublicImplicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
  }

  class Subclass extends Base {
    examples() {
      this.isPublicImplicit; // OK
      this.isPublicExplicit; // OK
      this.isProtected; // OK

      this.isPrivate;
      // Error: Property 'isPrivate' is private and only accessible within class 'Base'.
      // 'isPrivate' 속성은 private이며 'Base' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
      
      this.#truePrivate;
      // Error:  Property '#truePrivate' is not accessible outside class 'Base' because it has a private identifier.
      // '#truePrivate' 속성은 프라이빗 식별자를 포함하기 때문에 'Base' 클래스 외부에서 액세스할 수 없습니다.ts(18013)
    }
  }

  new Subclass().isPublicImplicit; // OK
  new Subclass().isPublicExplicit; // OK

  new Subclass().isProtected;
  // Error: Property 'isProtected' is protected and only accessible within class 'Base' and its subclasses.
  // 'isProtected' 속성은 보호된 속성이며 'Base' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.ts(2445)

  new Subclass().isPrivate;
  // Error: Property 'isPrivate' is private and only accessible within class 'Base'.
  // 'isPrivate' 속성은 private이며 'Base' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
}

{
  class TwoKeywords {
    private readonly name: string;

    constructor() {
      this.name = "Anne Sullivan"; // OK
    }

    log() {
      console.log(this.name); // OK
    }
  }

  const two = new TwoKeywords();

  two.name = "Savitribai Phule";
  // Error: Property 'name' is private and only accessible within class 'TwoKeywords'.
  // Cannot assign to 'name' because it is a read-only property.
  // 'name' 속성은 private이며 'TwoKeywords' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
  // 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540)
}

{
  class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt = "What's an ogre' favorite programming language?";

    guess(getAnswer: (prompt: string) => string) {
      const answer = getAnswer(Question.prompt);

      // OK
      if (answer === Question.answer) {
        console.log("You got it!");
      } else {
        console.log("Try again...")
      }
    }
  }

  Question.answer;
  // Error: Property 'answer' is protected and only accessible within class 'Question' and its subclasses.
  // 'answer' 속성은 보호된 속성이며 'Question' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.ts(2445)
} 