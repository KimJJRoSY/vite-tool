const arr = [1, 2, 3];

const newArr = arr.map((item, index) => {
  return item * index;
});

type Map = <T, U>(arr: T[], f: (n: T) => U) => void;

const map: Map = (arr, f) => {
  let result = [];

  for (const a of arr) {
    result.push(f(a));
  }
  return result;
};
// map(arr, (i) => i * 2);
// 실행부 먼저 작성해서 함수 만들기 -> 타입이 계속 바뀔 여지 있음 -> 제네릭 사용
//
// 함수를 시작하고 매개변수 받으면 TU를 앞에서 받음

// 일단 매개 변수 다 나열해서 작성 -> 그 다음에 타입 분리

type Callback<T> = (a: T, i: number) => void; // 제네릭 타입

type ForEach = <T>(arr: T[], f: Callback<T>) => void; // 제네릭 타입을 참조하고 있는 함수

const forEach: ForEach = (arr, f) => {
  // 그래서 작성할때 ForEach<T>이렇게 안씀
  let i = 0;
  for (const a of arr) {
    f(a, i++);
  }
};

// forEach(arr, (a,i)=>console.log(a))
interface _Callback<T> {
  (a: T, i: number): boolean;
}

type Filter = <T>(arr: T[], f: _Callback<T>) => T[];

// functio filter:Filter에는 이렇게 못 씀
const filter: Filter = (arr, f) => {
  const result = [];
  let i = 0;
  for (const a of arr) {
    if (f(a, i++)) result.push(a); //f의 결과값이 참이면 a를 푸쉬함
  }
  return result;
};

// filter(arr,(a)=>a>1)

// type ReduceCallback<T, U> = (arr: U, cur: T, index: number) => U;
// type Reduce = <T, U>(acc: T[], f: ReduceCallback<T, U>, initial: U) => U;

// const reduce: Reduce = (acc, f, initial) => {
//   let acc = initial;
//   let i = 0;
//   for (const a of arr) {
//     acc = f(acc, a, i++);
//   }
//   return acc;
// };

type __Callback<T, U> = (acc: U, cur: T, i: number) => U;
type Reduce = <T, U>(arr: T[], f: __Callback<T, U>, initial: U) => U;

const reduce: Reduce = (arr, f, initial) => {
  let acc = initial;
  let i = 0;
  for (const a of arr) {
    acc = f(acc, a, i++);
  }
  return acc;
};

// reduce(arr, (a) => a * 2, 0);
