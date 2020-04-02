// 开发一个字典类（dictionary），字典中会保存键值对数据

// 键值对数据特点：
// 键（key）可以是任何类型，但不允许重复
// 值（value）可以是任何类型，
// 每个键对应一个值
// 所有的键类型相同，所有的值类型相同

// 字典类中对键值对数据的操作
// 对一个键值对的增删改查

export class Dictionary<T,K> {

    constructor(private keys:T[],private values:K){

    }
}