// 디폴트 프로토타입은 다른 객체로 변경이 가능하다


function Person(name) {
  this.name = name;
}

console.log(Person.prototype.constructor);   // 'Person(name)'

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.country);   // 'undefiend'

// 디폴트 프로토타입 객체 변경
Person.prototype = {
  country: 'korea',
};
console.log(Person.prototype.constructor);       // 'Object()'

// bar 객체 생성
var bar = new Person('bar');
console.log(foo.country);   // 'undefined'
console.log(bar.country);   // 'korea'
console.log(foo.constructor);   // 'Person(name)'
console.log(bar.constructor);   // 'Object()'








