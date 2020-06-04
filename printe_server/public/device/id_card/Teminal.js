if (!window.teminal || "function" !== typeof teminal) {
    var teminal = function(g) { 
    };
	
	/**
	* 获得WOSA设备状态
	*/
	function GetWOSAState(WosaState){
		if (WosaState == "HEALTHY"){
			return "1";
		} else if (WosaState == "NO_DEVICE"){
			return "0";
		} else if (WosaState == "FATAL"){
			return "3";
		}else{
			return "4";
		}
	}
	
	"$" in window || (window.$ = teminal);
}