// 클로저 활용.

function HelloFunc(func) {
  this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
  console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;     // 사용자는 func 프로퍼티에 자신이 정의한 함수를 참조시켜 호출할 수 있다.
objHello.call();              // call 을 보면 알 수 있듯이 자신의 지역 변수인 greeting 만을 인자로 사용자가 정의한 함수에 넘긴다. (다시 말하면 greeting 지역변수를 사용자가 정의한 함수에 인자로 넘긴다는 소리...)

console.dir(objHello);