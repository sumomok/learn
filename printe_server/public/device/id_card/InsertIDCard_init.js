
function open() {
    return top.IDCard.OpenDevice;
}

function close() {
    try {
        var iRet = top.IDCard.CloseDevice;
    } catch (e) {
        WriteLog(e);
    }
}
function GetDeviceStatus() {
    try {
        var info = top.IDCard.GetDeviceStatus()
        WriteLog(info + "：身份证");
        return info;
    } catch (e) {
        WriteLog('打印机状态：' + e);
    }
}
function initIDCard() {
    var iRet;
    try {
        top.IDCard = IDCard;
        iRet = open();
        if (iRet == undefined || !iRet.startWith("000012")) {
            iRet = open();
            // WriteLog("重试 打开身份证控件：" + iRet);
        }
        if (GetDeviceStatus() == '010008设备故障') {

        } else {

        }
    } catch (e) {

    }
    if (iRet != undefined && iRet.startWith("000012")) {
        
    } else {

    }
}

function acceptAndRead() {

    try {
       return top.IDCard.AcceptAndRead(50);
    } catch (e) {
        WriteLog(e);
    }

}
function cancelRead() {
    try {
        top.IDCard.CancelAcceptAndRead();
    } catch (e) {
        WriteLog(e);
    }

}


function getInfo() {
    return top.IDCard.GetInfo;
}

