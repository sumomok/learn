 abstract class dongwu {
    abstract name:string
}

class Lion extends dongwu implements IFrie {
    name: string = "狮子";
    singleFire(){
        console.log("跳火圈")
    }
}
class mokey extends dongwu {
    name: string = "狮子";
}

interface IFrie{
    singleFire():void
}

let l = [new Lion(),new mokey()]

function hasFireShow(ani:Object):ani is IFrie{
    if (!(ani  as IFrie).singleFire) {
        return false
    } else {
        return true
    }
}

l.forEach(it=>{
    if (hasFireShow(it)){
        it.singleFire()
    }
})