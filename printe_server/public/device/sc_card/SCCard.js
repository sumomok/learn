// 校园卡
(function($, undefined) {
	if (typeof SCCard == "undefined") {
		SCCard = {};
	}
	SCCard.Device = function() {
		var cRCSTwo;
		this.sccard = document.getElementById("SCCard");
		Object.defineProperty(this.sccard, "cRCSTwo", {
			get: function () {
				console.log("get cRCSTwo event");
				return cRCSTwo;
			},
			set: function (value) {
				console.log("set cRCSTwo event");
				cRCSTwo = value;
			}

		})
	}
	SCCard.Device.prototype = {


		Init: function () {
			var ret = this.sccard.CInit();
			WriteLog("初始化校园卡|返回:" + ret);
			return ret;
		},
		ReadCard : function(){
			try {
				var ret= this.sccard.ReadCardSimpleTwo(20);
				if(ret == 0){
					return "success";
				} else{
					return "failure";
				}
			} catch(err) {
				WriteLog("读校园卡异常:" + err);
			}
		},
		GetCardNum : function () {
			try {
				var str = this.sccard.cRCSTwo;
				if(str == 1){
					return "failure";
				}
				var arr = str.split("|");
				var arrtwo = arr[0].split("=");
				var retstr = arrtwo[0], ret = arrtwo[1];
				if(retstr =="nRet" && ret =="0"){
					var student = arr[5].split("=");
					return student[1];
				}

				return "failure";

			} catch(err) {

				return "failure";
			}
		},
		CloseDevice : function() {
			try {
				this.sccard.CRClose();
			} catch (err) {
			}
		}
	}
})(teminal);


