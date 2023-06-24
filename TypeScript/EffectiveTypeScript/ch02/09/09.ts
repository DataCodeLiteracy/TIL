interface Person {
  name: string;
}
const people: Person[] = ["alice", "bob", "jan"].map(
  (name): Person => ({ name })
);
const people2: Person[] = ["alice", "bob", "jan"].map<Person>((name) => ({
  name
}));
const people3: Person[] = ["alice", "bob", "jan"].map((name) => ({ name }));

export default {};
