// 6. 객체지향 프로그래밍
// 6.2.2 클래스 기반의 상속

function Person(arg) {
  this.name = arg;
}

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
}

Person.method("setName", function(value) {
  this.name = value;
});

Person.method("getName", function() {
  return this.name;
});

function Student(arg) {
}

function F() {};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student();
me.setName("zzoon!");
console.log(me.getName());
console.dir(me);

