/* any type */

let obj: any;
obj = 1;
obj = "s";
obj = { x: 10 };
obj = () => {};
obj.toFixed();

/* unknown */
let arr: unknown;

arr = 1;
arr = "hello";

// arr.toFixed();

/* 타입 좁히기 narrowing */

if (typeof arr === "number") {
  arr.toFixed();
}
