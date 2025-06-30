/* void type*/

function sayHi(massage: string): string {
  return "hello";
}

function printHi(): void {
  console.log("hello");
  return undefined;
}

/* never type */
// 존재하지 않는 / 불가능한 타입/ 어떤 값도 정의할 수 없는 타입
//언제 사용? 함수의 리턴값이 에러를 내보낼때  => 절대 발생하지 않는 값/ 절대 도달할 수 없는 코드

function showError(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}
