define(['m1'],function(m1){
    var mod1 = m1.fun();
    var demo = 'm2';
    function fun() {
        console.log(demo);
        console.log(mod1)
    }
    return {fun}
})