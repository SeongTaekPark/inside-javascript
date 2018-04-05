// 5.4.1 클로저의 개념
// 클로저 : 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.

function outterFunc() {
  var x = 10;

  // 클로저
  var innerFunc = function() {
    console.log(x);
  };
  return innerFunc;
}

var inner = outterFunc();
inner();