// 6. 객체지향 프로그래밍
// 6.2.2 클래스 기반의 상속


function Person(arg) {
  this.name = arg;
}

Person.prototype.setName = function(value) {
  this.name = value;  
}

Person.prototype.getName = function() {
  return this.name;
}

function Student(arg) {
}

var you = new Person("iamstpark");
Student.prototype = you;

var me = new Student("zzoon");
me.setName("zzoon");
console.log(me.getName());



