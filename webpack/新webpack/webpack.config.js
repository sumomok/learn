module.exports = {
    mode:"development",
    module:{
        rules:[
            {
                test:/index\.js$/,
                use:[{
                    loader:"./loaders/myloader",
                    options:{
                        changeVar:"变量"
                    }
                }]
            }
        ]
    }
}