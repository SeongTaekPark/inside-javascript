// [[ 프로토타입 메서드와 this 바인딩 ]]


function Person(name) {
  this.name = name;
}

// getName() 프로토타입 메서드
Person.prototype.getName = function() {
  return this.name;
};

var foo = new Person('foo');
console.log(foo.getName());

Person.prototype.name = 'Person';
console.log(Person.prototype.getName());


