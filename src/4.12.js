// 4. 함수와 프로토타입 체이닝
// 4.2.3 함수 객체의 기본 프로퍼티

function add(x, y) {
  return x + y;
}

// Function.prototype 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체다.
console.dir(add);