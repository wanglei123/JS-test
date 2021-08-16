function logProperty(params:any){
    return function(target:any,attr:any){
         console.log(attr) // 当前实例
        console.log(attr) // 当前属性名
        // 把传进来的参数赋值到实例中
        target[attr] = params; // s:'www.baidu.com's:'www.baidu.com'
    }
}
class HttpClient4{
    @logProperty('www.baidu.com,%s')
    public url:any | undefined; // 可以给我们的属性赋值
    constructor(){

    }
    getData(){
        console.log(1111, this.url)
    }
}
var http:any = new HttpClient4()
http.getData()
