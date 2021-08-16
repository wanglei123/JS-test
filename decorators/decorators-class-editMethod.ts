function logMethod2(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        console.log(desc.value);

        // !修改装饰器的方法，把装饰器所有传入的参数改为string
        // 1. 保存当前的方法
        var oMethod = desc.value;
        desc.value = function(...args:any[]){
            args = args.map((value)=>{ // map 循环遍历
                return String(value) // 转类型
            })

            console.log(args) // [ 123, 999 ]

            oMethod.apply(this.args) // 用对象冒充来实现 把当前方法和参数传入
        }

    }
}
class HttpClient7{
    public url:any | undefined;
    constructor(){

    }
    @logMethod2('www.baidu.com')
    getData(...args:any){ // 将传入的any类型的参数解构
        console.log(args)
        console.log("我是getData里的方法")
        console.log(this.url)
    }
}
var http:any = new HttpClient7()
http.getData(123,999)
