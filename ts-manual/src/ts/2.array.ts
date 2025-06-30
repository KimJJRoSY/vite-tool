let array: number[] = [1, 2, 3];

let str: string[] = "a,b,c".split(",");

/* generic type 타입 변수 */
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ["a", "b", "c"];

/* 유니온 타입 union type  + array type  */
// 여러 타입이 배열에 들어와도 ㄱㅊ
let multi: (string | number | boolean)[] = ["hello", 10, true];

multi = [199, 22, false, "dd"];

// 자리와 그에 따른 타입 지정하고 싶을 때
/* tuple type  */
let tupleA: [number, number, number] = [1, 2, 3];
// tupleA=[1,2]

let tupleB: [string, number] = ["tit", 20];
// tupleB=[40,'nin']

/* 다차원 배열 */
const user: [string, number][] = [
  ["tt", 20],
  ["tt", 20],
  ["tt", 20],
];
