/* Omit<T,K> */

type User = {
  id: number;
  name: string;
  email: string;
};

// omit<>안에 생략해도 괜찮은 값 넣기
type PublicUser = Omit<User, "email">;

const user: PublicUser = {
  id: 1,
  name: "ui",
};

// Pick<T,K>
// 내가 필요한 것들만 넣음
const user2: Pick<User, "id" | "name"> = {
  id: 2,
  name: "nii",
};

//Partial<T>
type User3 = {
  id: number;
  name: string;
  email: string;
  address: {
    late: number;
    long: number;
  };
};
const user3: Partial<User3> = {
  name: "seon",
};

// Required 타입 T의 모든 속성을 필수로 만듦
const user5: Required<User3> = {
  id: 1,
  name: "jini",
  email: "nii@gmail.com",
  address: {
    late: 12,
    long: 33,
  },
};

// Readonly<T> 모든 요소들이 읽기만 가능함
const user6: Readonly<User3> = {
  id: 1,
  name: "jini",
  email: "nii@gmail.com",
  address: {
    late: 12,
    long: 33,
  },
};

//Record<K,V>
//K들로 구성된 객체를 만들고, 각 값은 V타입으로 지정
// type Role = "admin" | "user" | "guest";
type Role = keyof typeof access;

type RoleStatus = Record<Role, boolean>;

const access = {
  admin: true,
  user: true,
  guest: false,
};
