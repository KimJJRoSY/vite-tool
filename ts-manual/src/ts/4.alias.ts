/* alias : 별칭 */
// type, interface

type User1 = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

//기존에 정의된 타입 확장 가능
type User2 = User1 & { address: string };

const user1: User1 = {
  id: 1,
  name: "joo",
  auth: "admin",
  isPaid: true,
};

const user2: User1 & { address: string } = {
  id: 2,
  name: "jojo",
  auth: "user",
  isPaid: false,
  address: "soul",
};

interface User3 {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// 인터페이스는 만들면 그대로 흡수함
// interface User3 {
//   address: string;
// }

interface User4 extends User3 {
  address: string;
}

const user3: User4 = {
  id: 3,
  name: "kim",
  auth: "user",
  isPaid: true,
  address: "gwangju",
};

/* index signature */
// 객체의 키가 동적으로 결정될 때 유용하게 사용가능
type Person = {
  name: string;
  age: number;
  email: string;
  //키는 무조건 string이고 값은 문자열이거나 숫자
  [key: string]: string | number;
};

const person = {
  name: "asdf",
  age: 40,
  email: "asdf@gmail.com",
  gender: "male",
  phone: 10212341234,
};
