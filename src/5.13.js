// 5.4 클로저
// 5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의

function callLater(obj, a, b) {
  return (function(){
    obj["sum"] = a + b;
  });
}

var sumObj = {
  sum: 0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
