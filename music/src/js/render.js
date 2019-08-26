(function () {
    class render {
        constructor() {
            this.render = function (data) {
                this.renderImg(data[1].image);
                this.renderInfo(data[1])
            };
        }
        renderImg(src) {

            var img = new Image();
            img.src = src;
            // img.crossOrigin = 'abc';
            img.onload = function () {
                $('.song-img img').attr('src', src);
                root.blurImg(img, $('body'))
            }


        }
        renderInfo(data) {
            console.log(data.song,data.album,data.singer)
            $('.song-name').html(data.song);
            $('.album-name').html(data.album);
            $('.singer-name').html(data.singer);
        }
    }
    window.player = new render;
})(window.zepto, window.player || (window.player = {}));