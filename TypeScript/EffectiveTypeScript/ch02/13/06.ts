type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}
type TFnWithProperties = {
  (x: number): number;
  prop: string;
};
interface IFnWithProperties {
  (x: number): number;
  prop: string;
}

// const fn = (x:  number) => 10
// fn.prop = 'a';
// const fn2: TFnWithProperties = fn;

export default {};
