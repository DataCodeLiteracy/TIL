type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

// 예시
interface StringDict {
  [key: string]: string;
}

const dict: StringDict = {
  foo: "bar",
  baz: "qux"
};

// 예시 2
interface IState {
  name: string;
  capital: string;
}

type State = {
  [key: string]: IState;
};

const state: State = {
  California: {
    name: "California",
    capital: "Sacramento"
  },
  Texas: {
    name: "Texas",
    capital: "Austin"
  }
};

export default {};

/**
 * 요약
 *
 * 인덱스 시그니처도 타입과 인터페이스 모두에서 사용가능하다.
 */
