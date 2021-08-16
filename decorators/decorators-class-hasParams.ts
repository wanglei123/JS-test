function logClass1(params:string){
    return function(target:any){ // 返回的target就是调用本装饰器的类
        console.log(target)
        console.log(params)

        target.prototype.apiUrl = params; // 将传入的参数赋值给该类的原型扩展属性apiUrl
    }
}

@logClass1('www.baidu.com') // 调用装饰器同时传入一个string类型的参数
class HttpClient2{
    constructor(){

    }
    getData(){}
}
var http:any = new HttpClient2();
console.log(http.apiUrl) // www.baidu.com
