function doSomething(fn) {
    console.log(fn.des);
    console.log(fn.age);
    fn(6);
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.des = 'hello';
fn1.age = 1;
doSomething(fn1);
