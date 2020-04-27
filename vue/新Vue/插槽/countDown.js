/**
 * 倒计时模块
 */
function CountDown(timerEleId, warnCallback, timeoutCallback, autoHide) {
    var _timerEleId = timerEleId; // wrapper element
    var _warnCallback = warnCallback; // callback function for warning
    var _timeoutCallback = timeoutCallback; // callback function for timeout
    var _autoHide = autoHide; // auto hide wrapper element when timeout
    var _timeRemains = 0;
    var _warnTime = 0;
    var _intervalId = -1; // see setInterval
    var savedThis = this;

    function doCountDown() {
        if (_timeRemains < 0)
            return;

        updateUI();

        if (_timeRemains == 0) { // 终止倒计时
            try {
                _timeoutCallback(savedThis);
            } catch (exception) {
                // nothing to do
            }

            if (_autoHide)
                //$("#" + _timerEleId).css("visibility", "hidden");
                $("#" + _timerEleId).parent().hide();
            savedThis.Stop();
            return;
        }

        if (_timeRemains == _warnTime) // 提前报警
        {
            try {
                _warnCallback(savedThis);
            } catch (excep) {
                // nothing to do
            }
        }

        _timeRemains--;
    }

    // 更新界面
    function updateUI() {
        //var minutes = Math.floor(_timeRemains / 60);
        //var seconds = Math.floor(_timeRemains % 60);
        //if (minutes == 1 && seconds == 0) { // 60秒的时候正常应该显示1：00，但是实际是显示60
        //    minutes = 0;
        //    seconds = 60;
        //}

        //if (seconds < 10 && minutes > 0) {
        //    seconds = "0" + seconds;
        //}

        //var msg;
        //if (minutes == 0)
        //    msg = seconds;
        //else
        //    msg = minutes + ":" + seconds;
        var msg = _timeRemains;
        $("#" + _timerEleId).html(msg);
    }

    // js程序入口 n_maxtime表示倒计时时间, n_warntime表示提醒时间
    this.Start = function (n_maxtime, n_warntime) {
        this.Stop();

        if (n_maxtime < 3600 && n_maxtime >= 0) { // 最长支持一个小时的倒计时
            _timeRemains = n_maxtime;
            _warnTime = n_warntime;
            doCountDown();
            $("#" + _timerEleId).parent().show();
            //$("#" + _timerEleId).css("visibility", "visible");
            _intervalId = setInterval(doCountDown, 1000); // 调用doCountDown开始计时
        } else {
            // log.fatal("最长支持一个小时的倒计时，且倒计时起始时间应不小于0");
        }
    };

    // 关计时器
    this.Stop = function () {
        if (_intervalId != -1) {
            clearInterval(_intervalId);
            _intervalId = -1;
        }
        _timeRemains = -1;
        _warnTime = -1;
    };

    this.IsStarted = function () {
        return _intervalId != -1;
    };
}
