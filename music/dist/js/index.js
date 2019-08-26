getData("../moke/data.json");
// player.demo()
function getData(url){
    $.ajax({
        url:url,
        success:function(data){
            player.render(data)
        },
        error:function(e){
        }
    })
}
//渲染页面
//点击按钮
//音频的控制
//进度条的控制
//图片旋转
//列表切歌
