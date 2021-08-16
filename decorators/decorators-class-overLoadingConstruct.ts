function logClass3(target:any){
    console.log(target); // 调用装饰器的类
    return class extends target{ // 返回一个target的继承，进行一个扩展
        apiYrl:any = '这是修改后的数据'
        getData(){
            this.apiYrl = this.apiYrl+'----';
            console.log(this.apiYrl) // 我是构造函数里的apiYrl----
        }
    }
}

@logClass3
class HttpClient3{
    public apiYrl:string | undefined;
    constructor(){
        this.apiYrl = '我是构造函数里的apiYrl'
    }
    getData(){
        console.log(this.apiYrl) // 我是构造函数里的apiYrl
    }
}
// 在实例化同时传入值并且被打印出来
var http:any = new HttpClient3()
http.getData()
