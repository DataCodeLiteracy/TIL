type Video = {
  title: string;
  author: string;
  description: string;
};

type VideoOptional = {
  title?: string;
  author?: string;
  description?: string;
};

type VideoReadOnly = {
  readonly title: string;
  readonly author: string;
  readonly description: string;
};

// 일일이 추가하는 것은 번거롭다.. 그럼?
// 간편하게 재사용성을 높인 것이 map 타입

type Optional<T> = {
  // [] // for ...in
  [P in keyof T]?: T[P];
};

type VideoOptional2 = Optional<Video>;

const videoOp: VideoOptional2 = {
  title: '비디오',
  // animal: -> 에러
  // 나머지는 있어도 되고 없어도 됨
};

type Animal = {
  name: string;
  age: number;
};

type AnimalOptional = Optional<Animal>;

const animalOp: AnimalOptional = {
  name: '호랑이',
};

animalOp.name = '사자';

type Readonly2<T> = {
  readonly [P in keyof T]: T[P];
};

const video: Readonly2<Video> = {
  title: 'hi',
  author: 'jonghyun',
  description: '..',
};

// video.title = '바꿔'; // 안된다.. readonly 라..

type Nullable<T> = { [P in keyof T]: T[P] | null };

const obj4: Nullable<Video> = {
  title: null,
  author: null,
  description: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
