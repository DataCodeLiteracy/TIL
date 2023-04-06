{
  /* 
    Type Aliases
  */
  
  type Text = string;

  const name: Text = 'JongHyun';
  const address: Text = 'Ansan';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'JongHyun',
    age: 37,
  };

  /*
    String Literal Types
  */
  
  type Name = 'name';
  let JongHyunName: Name;
  JongHyunName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = false;
  // isCat'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
  // 'false' 형식은 'true' 형식에 할당할 수 없습니다.ts(2322)
}