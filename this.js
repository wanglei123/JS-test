// function Pet(name) {
//     this.name = name;
//
//     this.getName = () => this.name;
// }
//
// const cat = new Pet('Fluffy');
//
// console.log(cat.getName()); // What is logged?
//
// const { getName } = cat;
// console.log(getName());

var name = '林一一'
var obj = {
    name : '二二',
    callback: function(){
        console.log(this.name)
    }
}

setTimeout(obj.callback,1000)


// function Fn(){
//     var n = 0
//     this.name = '林一一'
//     this.age = 18
//     this.getName = function(){
//         return this.name
//     }
// }
//
// Fn.prototype.getAge = function(){
//     return this.age
// }
//
// Fn.x = '林二二'
//
// var f = new Fn()
// console.log(f.name)     // 林一一
// console.log(f.getName())     // 林一一
// console.log(f.getAge())        // 18
// console.log(f.n)    // undefined
// console.log(f.x)    // undefined


// var name = '林一一'
// var obj = {
//     name: '二二',
//     a: () => {
//         console.log(this.name)
//     }
// }
// obj.a()
