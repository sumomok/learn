import SSCard from "../page/SSCard";

// 校园卡导出方法
export class MySccard{
    public scCardInit(sccard:SSCard) {
        
    }
}
/**
 * 初始化校园卡
 * @param {存放着设备ocx的dom对象} sccard 
 * 1为初始化失败 0为初始化成功
 * 初始化成功后即可调用readSCCard方法进行简单读卡
 */
// function scCardInit(sccard){
//     var ret;
//     try {
//         this.SCCard = sccard;
//         ret = this.initSCCard(sccard);
// 		// WriteLog("校园卡 初始化结果："  + ret);
//         if(ret == 1){
//             // ret = initSCCard();
// 			// WriteLog("重试 校园卡 初始化结果："  + ret);
// 			// console.log(ret)
//         }
//     } catch (e) {
//         // commitDeviceStatus("02", "校园卡 初始化失败：" + e,"04","SCCard01",function(){});
// 		// WriteLog("校园卡 初始化失败："  + e);
// 		console.log(e)
//         // top.mainFrame.showMsgBox("初始化校园卡，失败", scCardInit,function(){
//         // });
//     }
//     if(ret == 0){
//         //readCard();
//     }else{
//         // top.mainFrame.showMsgBox("初始化校园卡，失败", scCardInit,function(){
//         // });
//     }
// }
// function initSCCard(sccard){
//     // console.log(top.SCCard.CInit);
//     // top.SCCard = SCCard;
//     return sccard.CInit;
// }
// /**
//  * 简单读卡
//  * 调用ocx中的简单读卡获取校园卡中的信息
//  */
// function readSCCard(){
//     this.SCCard.ReadCardSimpleTwo(50);
// }

// function closeSCCard(){
//     // 关闭校园卡
//     try {
//         var iRet=this.SCCard.CloseDevice;
//     } catch (e) {
//     }
// }
