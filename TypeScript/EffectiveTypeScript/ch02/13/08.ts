type TState = {
  name: string;
  capital: string;
};
type TState2 = {
  population: number;
};
interface IState {
  name: string;
  capital: string;
}
interface IStateWithPop extends TState {
  population: number;
}

interface IStateWithPop2 extends TState2 {
  name: string;
  capital: string;
}
type TStateWithPop = IState & { population: number };

const s: IStateWithPop = {
  // population, name, capital 속성이 없습니다.
};

const s2: IStateWithPop2 = {
  // name, capital, population 속성이 없습니다.
};

const s3: TStateWithPop = {
  // IState' 형식의 name, capital 속성이 없습니다.
  // IState 모두 속성을 정의한 뒤에 population 오류가 뜬다.
};

export default {};

/**
 * 요약
 *
 * 확장할 때 미묘하게 다르지만 본질은 타입을 정의했을 때 모든 속성들을 포함하고 있어야 한다.
 */
