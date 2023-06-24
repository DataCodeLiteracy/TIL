{
  /*
    Intersection Types: & 
  */
  
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name);
    console.log(person.employeeId);
    console.log(person.work());
  }

  internWork({
    name: 'JongHyun',
    score: 1,
    employeeId: 123,
    work: () => { },
  });
}