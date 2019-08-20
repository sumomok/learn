    require.config({
        paths:{
            m1:'./modules/m1',
            jquery:'./lib/jquery-3.3.1'
        }
    })
    require(['m1','jquery'],function(m1,$){
        function bindEvent() {
            $('.open').click(function(){
                m1.openDevice();
            });
            $('.get').click(function(){
                var data = m1.getImgBase();
                $('.imgData').text(data);
            })
        }
        bindEvent();
    })