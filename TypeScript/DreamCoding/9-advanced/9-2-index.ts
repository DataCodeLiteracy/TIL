{
  const obj = {
    name: 'jonghyun',
  };

  obj['name']; // jonghyun
  obj.name; // jonghyun

  // 타입도 인덱스를 기반으로 결정할 수 있다.
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];

  const Tiger: Name = '호랑이';

  console.log(Tiger);

  type Gender = Animal['gender']; // "male" | "female";

  type Keys = keyof Animal;

  const keys: Keys = 'gender'; // name | age | gender

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'jonghyun',
    gender: 'female',
  };
}
