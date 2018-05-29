/**
 * 一道容易忽略的js面试题
 */
function Foo(){
  getName = function(){
    alert(1)
  }
  return this
}

Foo.getName = function(){
  alert(2)
}
Foo.prototype.getName = function(){
  alert(3)
}
var getName = function(){
  alert(4)
}
function getName(){
  alert(5)
}

// 
Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName() // 3

// 答案链接：http://www.cnblogs.com/xxcanghai/p/5189353.html