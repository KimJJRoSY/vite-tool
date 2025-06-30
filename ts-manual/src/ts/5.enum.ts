/* enumerable type */
/* 진짜 찐쨔 쨔쨔 찐 상수 사용하고 싶을 때 , 사용!! */
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

// 타입스크립트가 실제 자바스크립트에 개입
const direction = {
  up: Direction.UP,
  down: Direction.DOWN,
  left: Direction.LEFT,
  right: Direction.RIGHT,
};

enum End_point {
  USER = "",
  POKEMON = "",
  IMAGE = "",
}
const END_POINT = {
  user: End_point.USER,
};
