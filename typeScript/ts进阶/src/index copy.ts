abstract class Chess{
    abstract readonly name:string;
    move(targetX:number,targetY:number):boolean{
        console.log('判断是否出界')
        console.log('判断是否有友方棋子')
        if (this.rule(targetX,targetY)){
            console.log('移动了')
        }
        return true
    }
    abstract rule (targetX:number,targetY:number):boolean
    
}
class ma extends Chess{
    rule(targetX: number, targetY: number): boolean {
        console.log(targetX,targetY,"马的规则")
        return true
    }
    name: string = "马";

}
class pao extends Chess{
    rule(targetX: number, targetY: number): boolean {
        console.log(targetX,targetY,"炮的规则")
        return true
    }
    name: string = "炮";

}

let paoObj = new pao()
paoObj.move(3,4);