// 5.4 클로저
// 5.4.2.2 함수의 캡슐화

var getCompletedStr = (function() {
  var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'m ',
    '',
    ' years old.'
  ];

  return (function(name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
  });
})();

var str = getCompletedStr('taek', 'seoul', 38);
console.log(str);
