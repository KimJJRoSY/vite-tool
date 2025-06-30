let array = [1, 2, 3];
let str = "a,b,c".split(",");
/* generic type 타입 변수 */
let _arr = [1, 2, 3];
let _str = ["a", "b", "c"];
/* 유니온 타입 union type  + array type  */
// 여러 타입이 배열에 들어와도 ㄱㅊ
let multi = ["hello", 10, true];
multi = [199, 22, false, "dd"];
// 자리와 그에 따른 타입 지정하고 싶을 때
/* tuple type  */
let tupleA = [1, 2, 3];
// tupleA=[1,2]
let tupleB = ["tit", 20];
// tupleB=[40,'nin']
/* 다차원 배열 */
const user = [
    ["tt", 20],
    ["tt", 20],
    ["tt", 20],
];
export {};
