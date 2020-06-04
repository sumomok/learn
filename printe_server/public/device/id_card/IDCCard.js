//二代证读卡器处理
(function($, undefined) {
	if (typeof IDCCard == "undefined") {
		IDCCard = {};
	}
	
	/**
	* 二代证读卡器设备
	*/
	IDCCard.Device = function()
	{
		this.ocx = document.getElementById("IDCCard");
		
		//读卡器事件名称
		this.events = {};
		this.Ex_QuitRead = "QuitRead";
		this.Ex_CardInserted = "CardInserted";
		this.Ex_CardAccepted = "CardAccepted";
		this.Ex_Timeout = "Timeout";
		this.Ex_CardAcceptCancelled = "CardAcceptCancelled";
		this.Ex_CardTaken = "CardTaken";
		this.Ex_CardRead = "CardRead";
		this.Ex_CardInvalid = "CardInvalid";
	}
	
	/**
	* 二代证读卡器参数设置
	*/
	IDCCard.Device.prototype = {
		
		/**
		* 打开并连接设备
		*/
		openDevice : function(){
		    var ret = this.ocx.OpenDevice();
		    WriteLog("打开二代证:调用-openDevice|返回:" + ret);
			return ret;
		},
		
		/**
		* 关闭设备连接
		*/
		closeDevice : function(){
		    var ret = this.ocx.CloseDevice();
		    WriteLog("关闭二代证:调用-CloseDevice|返回:" + ret);
			return ret;
		},
		
		/**
		* 等待读二代证，检测到二代证或超时后返回，超时
		*/
		acceptAndRead : function(timeout){
		    var ret = this.ocx.AcceptAndRead(timeout);
		    WriteLog("等待读二代证:调用-acceptAndRead|返回:" + ret);
			return ret;
		},
		
		/**
		* 取消待卡
		*/
		cancelAcceptAndRead : function(){
		    var ret = this.ocx.CancelAcceptAndRead();
		    WriteLog("取消等待读二代证:调用-cancelAcceptAndRead|返回:" + ret);
			return ret;
		},
		
		/**
		* 获得二代证信息
		*/
		getInfo : function(){
		    var ret = this.ocx.GetInfo();
		    WriteLog("获得二代证信息:调用-getInfo|返回:" + ret); 
    		return ret;
		},
		
		/**
		* 获取二代证状态
		*/
		getStatus : function(){
		    var ret = this.openDevice();
		    WriteLog("获得二代证状态:调用-getStatus|返回:" + ret); 
			if (ret.substring(0, 2) == "00")
				return "1";
			else
				return "3";
		},
		
		///////////////////////////////
		/// 二代证读卡器事件处理
		///////////////////////////////
		addEvent : function(type,fn){
			//移除历史事件监听
			if(this.events[type] != undefined || this.events[type] != null){
				this.ocx.detachEvent(type,this.events[type]);
			}
			
			//创建事件监听
			this.ocx.attachEvent(type,fn);
			
			//记录当前事件监听对象
			this.events[type] = fn;
		}
		
		
	}
	
	
})(teminal);

