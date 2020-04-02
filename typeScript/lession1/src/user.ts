class User {
    age:number
    gender: "男"|"女" = "男"
    pid?:string
    readonly id:number // 不能重新改变
    private publicNumber:number = 10
    private curNumber:number = 10
    constructor(public name:string,age:number){
        this.id = Math.random();
        this.age = age;
        this.name = name
    }
}