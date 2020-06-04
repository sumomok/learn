function PtrDocumentDevice() {
    this.initlize();
}

PtrDocumentDevice.prototype = (new LoongObject()).extend({
    initlize:function() {
        this.deviceEvntList = {
                        'PrintFormComplete':[{'name':'result','type':'string'}],
                        'PrintRawDataComplete':[{'name':'result','type':'string'}],
                        'ResetComplete':[{'name':'result','type':'string'}],
                        'TimeOut':[],
                        'MediaPresented':[{'name':'jsonParam','type':'string'}]
        };
    },
    createDeviceEventListener:function() {
        this.createEventScript(this.id,this.objName,this.deviceEvntList);
    },
    Reset:function(resetParam) {
        return this.execute('Reset', resetParam);
    },
    ResetAsync:function(resetParam) {
        return this.execute('ResetAsync', resetParam);
    },
    GetCapabilities:function() {
        return this.execute('GetCapabilities');
    },
    GetStatus:function() {
        return this.execute('GetStatus');
    },
    GetFormList:function(){
        return this.execute('GetFormList');
    },
    GetMediaList:function(){
        return this.execute('GetMediaList');  
    },
    GetForm:function(formName){
        return this.execute('GetForm', formName);  
    },
    GetMedia:function(mediaName){
        return this.execute('GetMedia', mediaName);  
    }, 
    GetField:function(formName, fieldName){
        return this.execute('GetField', formName, fieldName);  
    },
    Eject:function(cut){
        return this.execute('Eject', cut);  
    },
    PrintForm:function(formInfo){
        return this.execute('PrintForm', formInfo);  
    },
    PrintFormAsync:function(formInfo){
        return this.execute('PrintFormAsync', formInfo);  
    },
    PrintRawData:function(rawData){
        return this.execute('PrintRawData', rawData);  
    },
    PrintRawDataAsync:function(rawData){
        return this.execute('PrintRawDataAsync', rawData);  
    },
    Reset:function(resetParam){
        return this.execute('Reset', resetParam);  
    },
    ResetAsync:function(resetParam){
        return this.execute('ResetAsync', resetParam);  
    },
    GetLastXfsErr:function(){
        return this.execute('GetLastXfsErr');
    },
    GetLastXfsErrInfo:function() { // TO COMPLETE 错误信息
        switch(this.GetLastXfsErr())
        {
            case 0:
            return "操作成功";
            case -4:
            return "操作取消";
            case -13:
            return "设备没有准备好";
            case -14:
            return "设备故障";
            case -15:
            return "内部错误";
            case -32:
            return "设备已锁定";
            case -43:
            return "服务未找到";
            case -48:
            return "操作超时";
            case -50:
            return "无效操作";
            case -52:
            return "操作参数无效";
            case -53:
            return "软件错误";
            case -54:
            return "与设备连接丢失";
            case -56:
            return "不支持的操作参数";
            case -100:
            return "未找到表单";
            case -101:
            return "未找到字段";
            case -102:
            return "无可打印媒介";
            case -103:
            return "不支持读表单";
            case -104:
            return "写出失败";
            case -105:
            return "纸短";
            case -107:
            return "表单字段错误";
            case -108:
            return "未找到媒介";
            case -110:
            return "无效媒介";
            case -111:
            return "无效表单";
            case -112:
            return "无效字段";
            case -113:
            return "媒介偏斜";
            case -114:
            return "回收箱满";
            case -115:
            return "媒介堆满";
            case -116:
            return "翻页失败";
            case -117:
            return "翻媒介失败";
            case -118:
            return "出纸口故障";
            case -119:
            return "卡媒介";
            case -120:
            return "文件IO失败";
            case -121:
            return "无效编码数据";
            case -122:
            return "卡纸";
            case -123:
            return "无纸";
            case -124:
            return "无墨";
            case -125:
            return "无墨粉";
            case -127:
            return "无效源";
            case -129:
            return "媒介大小不符";
            case -130:
            return "无效端口";
            case -131:
            return "媒介被吞";
            case -132:
            return "黑标错误";
            case -134:
            return "媒介被拒绝";
            case -135:
            return "媒介收回";
            case -138:
            return "文件未找到";
            default:
            return "其他故障";
        }
    }
});

ptrDocumentDevice = new PtrDocumentDevice();
ptrDocumentDevice.setObjName('ptrDocumentDevice');
ptrDocumentDevice.loadOcx('1B58C214-90C8-4273-89BF-0C65F38411B7');
ptrDocumentDevice.createEventListener();
ptrDocumentDevice.createDeviceEventListener();