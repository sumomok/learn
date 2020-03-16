export default {
    namespace:"number",
    state:0,
    reducers:{
        increase:state=>state+1,
        decrease:state=>state-1,
        cover:({payload})=>payload,
    },
    effects:{
        *asyncIncrease(action,{call,put}){
            yield call([null,delpy],2000);
            yield put({
                type:"increase"
            })
        },
        *asyncDecrease(action,{call,put}){
            yield call([null,delpy],2000);
            yield put({
                type:"decrease"
            })
        }
    },
    subscriptions:{
        test(){
            console.log('test');
        }
    }
}

function delpy(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },time)
    })
}
