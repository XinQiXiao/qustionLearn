function Foo() {
    getName = function () { alert(1); }
    return this;
}
Foo.getName = function () { alert(2); }
Foo.prototype.getName = function () { alert(3); }
var getName = function () { alert(4); }
function getName () { alert(5); }
/* 写出输出 */
Foo.getName();2 // 2
getName();5 // 4
Foo().getName();2 // 1
getName();5 // 1
new Foo.getName();2 // 2
new Foo().getName()3 // 3
new new Foo().getName();3 // 3