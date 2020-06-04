import React, { PureComponent } from 'react';
import { devicProps } from '../../types/devic';
// import Device from '../../device/index';
import Store from '../../redux'
import { set } from '../../redux/reducer';
export default class Devic extends PureComponent<devicProps> {
    componentDidMount() {
        // let PrtDom = Device.ptrDocumentDevice;
        // this.printerInit(PrtDom)
    }
    printerInit(PrtDom: any) {
        try {
            var ptr = null;
            var logicalName = "StatementPrinter";
            ptr = PrtDom;
            ptr.SetAttribute("LogicalName", logicalName);
            ptr.OpenConnectionAsync();
            ptr.onEvent = function (cmd:string) {
                var num = arguments.length;
                var funcstr = "WriteCallResult(";
                funcstr += JSON.stringify(cmd);
                funcstr += ", false, 'void'";
                for (var i = 1; i < num; i++) {
                    var arg = arguments[i];
                    if (typeof arg == "string") {
                        arg = JSON.stringify(arg);
                    } else {
                        // arg = 'arguments['+i+']';
                        arg = arguments[i];
                    }
                    funcstr += "," + arg;
                }
                funcstr += ")";
                switch (cmd) {
                    case "OpenConnectionComplete":
                        // WriteLog('打印机状态：'+ top.ptr.GetStatus());
                        // console.log("打印机状态：" + top.ptr.GetStatus());
                        break;
                    case "HWError":
                        // commitDeviceStatus("02", "打印机HWError:" + funcstr, "04", "Printer01", function () { });
                        // WriteLog("打印机HWError:" + funcstr);
                        // top.mainFrame.showMsgBox("打印机HWError:" + funcstr + " 请联系管理员");
                        console.log("打印机HWError:" + funcstr);
                        break;
                    case "FatalError":
                        // commitDeviceStatus("02", "打印机FatalError:" + funcstr, "04", "Printer01", function () { });
                        // WriteLog("打印机FatalError:" + funcstr);
                        // top.mainFrame.showMsgBox("打印机FatalError:" + funcstr + " 请联系管理员");
                        console.log("打印机FatalError:" + funcstr);
                        break;
                    case "CloseConnectionComplete":
                        break;
                    case "MediaInserted":
                        break;
                    case "MediaTakend":
                        break;
                    case "PrintFormComplete":
                        break;
                    case "EjectComplete":
                        break;
                    case "PrintRawDataComplete":
                        // WriteLog("PrintRawDataComplete");

                        // if (num == 2) {
                        //     var printInfo = getJSONObject("printInfo");
                        //     var data = arguments[1];
                        //     if (data == 'Failure') {
                        //         sendMsg2TopScreen("<p style=\"color:red\">打印失败，请联系管理员</p>");
                        //         //commitDeviceStatus("02", "打印机打印失败:" + funcstr,"04","Printer01",function(){});
                        //         commitLog("", printInfo.TemplateNO, "", "", printInfo.screenShot, printInfo.peopleShot, "Failure", printInfo.ECode, "Print Failure" + funcstr, printInfo.UserCode, function () { });
                        //         WriteLog("打印机打印失败:" + funcstr);
                        //         top.mainFrame.showMsgBox("打印失败，请稍后重试！");
                        //         return;
                        //     }
                        //     WriteLog("打印成功");
                        //     // WriteLog(printInfo);
                        //     top.mainFrame.location.href = "../html/PrintSuccess.html";
                        //     commitLog("", printInfo.TemplateNO, "", "", printInfo.screenShot, printInfo.peopleShot, "Success", printInfo.ECode, "", printInfo.UserCode, function () { });
                        //     sendMsg2TopScreen("<p style=\"color:red\">打印成功，请取走文件</p>");
                        // } else {
                        //     WriteLog(arguments);
                        // }
                        break;
                    case "ResetComplete":
                        break;
                    case "MediaPresented":
                        break;
                    case "ControlMediaComplete":
                        break;
                    case "TimeOut":
                        break;
                    default:
                        break;
                }
                console.log("打印机事件：" + funcstr);
            };
        } catch (e) {
            console.log(e);
        }
        Store.dispatch(set({ type: 'prt', device: ptr }))
    }
    render() {
        let objArr = this.props.device.map(
            // eslint-disable-next-line
            (it, index) => <object
                id={it.id}
                classID={it.deviceClassId}
                key={index}
                width="0"
                height="0"
                ref={it.id}
            ></object>
        )
        return (
            <div className="device">
                {objArr}
            </div>
        )
    }
}
