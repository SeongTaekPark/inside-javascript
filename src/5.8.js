// 클로저 예제

function outterFunc(arg1, arg2) {
  var local = 8;
  function innerFunc(innerArg) {
    console.log((arg1 + arg2)/(innerArg + local));
  }
  return innerFunc;
}

var exam1 = outterFunc(2, 4);
exam1(2);