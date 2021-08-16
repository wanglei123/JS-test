function logMethod(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);

        target.apiUrl = params
        target.run = function(){
            console.log('run')
        }
    }
}
class HttpClient6{
    public url:any | undefined;
    constructor(){

    }
    @logMethod('www.baidu.com')
    getData(){
        console.log(123);
        console.log(this.url)
    }
}
var http:any = new HttpClient6()
console.log(111, http.apiUrl)
console.log(222, http.getData())
http.run()
