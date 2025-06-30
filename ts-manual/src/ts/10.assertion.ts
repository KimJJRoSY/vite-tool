// const input = document.querySelector("#textField") as HTMLInputElement;
// null 일수도 있으니까 아예 htmlInputElement라고 명시해놔야됨

//제네릭으로 써도 됨 -> 대신 제네릭으로 쓰면 ! 붙여서 null 없다고 명시해야됨
// 근데 타입 단언 사용하는건 위험함 -> 특수한 경우에 사용 지향
//ex) <div id='app'></div> 없으면 말이 안됨
// const input = document.querySelector<HTMLInputElement>("#textField")!;

// const input = document.querySelector<HTMLInputElement>("#textField");
// if (input) {
//   input.value;
// }

const input = document.querySelector("#textField");

if (input) {
  (input as HTMLInputElement).value;
}

const personA: {
  readonly name: string;
  readonly age: number;
} = {
  name: "hih",
  age: 30,
};

const personB = {
  name: "hih",
  age: 30,
} as const;

// personB.name = "oo";
