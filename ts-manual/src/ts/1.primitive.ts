/* number type */
let num1: number = 10;
let num2: number = NaN;
let num3: number = -123;
let num4: number = 0.1234;
let num5: number = Infinity;

num1 = 12;

/* string type */
let str1 = "hi";
let str2 = "hi";
let str3 = `hi ${num1}`;

str2 = "hello ";

/* boolean type */
let bool1 = true;
let bool2 = false;

/* null */
let nullA: null = null;

nullA = null;

/* undefined type */
let undef: undefined = undefined;

undef = undefined;

/* literal type */
let numA: 10 = 10;
let strA = "hello";
let boolA = true;

/* unknown type */
let unknown: unknown;

/* never type */
let never: never; // 어떠한 값도 내보내지 않음 -> 콘솔창 / 에러 확인 용

/* any type */
let any; //타입 지정 안하면 모두 any 타입으로 취급 -> any 남발하면 ts쓰는 의미 없음
