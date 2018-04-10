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

// 이렇게 하면 new Student("zzoon") 으로 me 인스턴스를 생성할 때 문제가 있음.
// function Student(arg) {
// }

function Student(arg) {
  // 이렇게 부모 클래스의 생성자를 호출해야 한다.
  Person.apply(this, arguments);
}

var you = new Person("iamstpark");
Student.prototype = you;

var me = new Student("zzoon");
me.setName("zzoon");
console.log(me.getName());



