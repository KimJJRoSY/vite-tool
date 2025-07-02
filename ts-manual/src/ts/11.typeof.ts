const user = {
  name: "tiger",
  age: 30,
  gender: "male",
  address: "soul",
};

typeof "a"; //string

type User = typeof user;

type UserKey = keyof User;

const settings = {
  theme: "dark",
  fontSize: 16,
  language: "ko",
};

// 'theme' |fontSize | language
type SettingsKey = keyof typeof settings;
// 객체 타입을 먼저 조회 후-> 그 객체타입의 키들만 뽑아서 조회하겠다

// typeof 뒤에는 무조건 자바스크립트 객체가 와야함 ->왜? 그걸 분해해서 타입을 만들어야 하니까
// keyof 뒤에는 타입스크립의 타입이 와야함 !!
