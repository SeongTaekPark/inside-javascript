// 5.4 클로저
// 5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function(currentI) {
      setTimeout(function() {
        console.log(currentI);
      }, currentI * 1000);
    })(i);
  }

  console.log('countSeconds 함수 종료');
}

countSeconds(3);