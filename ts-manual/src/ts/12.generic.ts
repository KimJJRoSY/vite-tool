// generic type
// Type은 매개변수
type User<T, U> = { name: T; age: U };

const user: User<string, number> = {
  name: "nin",
  age: 30,
};

// 유연한 함수를 만들때 -> 제네릭 필요 -> 언제까지 하나씩 다 지정함
// function fn(value: number): number {
//   return value;
// }

// fn(10);
// fn("hello");

// T는 모든 타입을 받을 수 있음 ->걍 매개 변수 이름임 -> 모든 타입 쓸 수 있음
// any와 다른점 -> 리턴값이 다름 ->함수 실행시 받은 타입만 리턴 가능 함
function fn<T>(value: T): T {
  return value;
}

fn(10);
fn("hh");
fn([]);
fn({});

/* 
T => Type
U => Util 
K => Key
V => Value
R => Return type
E => Element / Error
S => State
*/

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(0, "a");
swapAtoB([], "a");

function getLength<T extends { length: number }>(arr: T): number {
  return arr.length;
}

getLength([1, 2, 3]);
getLength(["ㅁ", "ㅎ", "ㅂ"]);
getLength(["ㅁ", "ㅎ", "ㅂ"]);
getLength({ length: 10 });

// type Response<T> = { type: string; content: T };
// type도 조건을 따질 수 있음
type Response<T> = T extends string
  ? { type: string; content: string }
  : { type: string; content: T };

const r1: Response<string> = {
  type: "text",
  content: "hello",
};

const r2: Response<{ name: string }> = {
  type: "json",
  content: { name: "nono" },
};

function getById<T extends { id: number }>(item: T): number {
  return item.id;
}
getById({ id: 10, title: "아이폰" });
getById({ id: 20, title: "갤럭시" });
// getById({ title: "맥북" });
