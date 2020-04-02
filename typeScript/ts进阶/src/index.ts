interface ITestA {
    name:string
    sayHello:(this:ITestA)=>void
}
let testa:ITestA = {
    name:"test",
    sayHello (){
        console.log(this,this.name)
    }
}
