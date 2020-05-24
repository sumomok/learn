export interface devicProps  {
    device:devicObject[]
}

export interface devicObject{
    deviceClassId: string,
    id: string,
    deviceTS:object
}

export interface SSCard { 
    CInit:Function
}