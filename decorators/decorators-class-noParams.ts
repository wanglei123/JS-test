function logClass(params:any){
    console.log('params', params) // 这个params 就是当前的类
    // 因此我们可以操作这个类
    params.prototype.apiUrl = 'xxx' //TODO  这里为什么要用 prototype 来给属性和方法赋值？？

    params.prototype.run = function(){
        console.log('用装饰器给类添加的方法')
    }
}

@logClass
class HttpClient{
    constructor(){

    }
    getData(){}
}
var http:any = new HttpClient();
console.log(http.apiUrl) // xxx
http.run() // 用装饰器给类添加的方法
