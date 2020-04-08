export  function classDescriptor(descriptor?:string){
    return function(target:new(...props:any[])=>object){
        target.prototype.$classDescriptor = descriptor;
    }
}
export function propDescriptor(Descriptor:string){
    return function (target:object,propName:string){
        if(!(target as any).$propDescriptor){
            (target as any).$propDescriptor = []
        }
        (target as any).$propDescriptor.push({
            propName,
            Descriptor
        })
    }
}
export function printDescriptor(target:object){
    console.log((target as any).__proto__.$classDescriptor)
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
           let result =  (target as any).__proto__.$propDescriptor.find((p:any)=>p.propName === key)
           console.log(`\t${result.Descriptor?result.Descriptor:result.propName}:${(target as any)[key]}`)
        }
    }
}