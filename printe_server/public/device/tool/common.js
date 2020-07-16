var bogusWindows1252chars = "\u20AC\u201A\u0192\u201E\u2026\u2020\u2021" +
    "\u02C6\u2030\u0160\u2039\u0152\u017D" +
    "\u2018\u2019\u201C\u201D\u2022\u2013\u2014" +
    "\u02DC\u2122\u0161\u203A\u0153\u017E\u0178";
// No translation is necessary for characters 0x81, 0x8D, 0x8F, 0x90, or 0x9D.
var correctLatin1chars = "\u0080\u0082\u0083\u0084\u0085\u0086\u0087" +
    "\u0088\u0089\u008A\u008B\u008C\u008E" +
    "\u0091\u0092\u0093\u0094\u0095\u0096\u0097" +
    "\u0098\u0099\u009A\u009B\u009C\u009E\u009F";
var storageMethod = "file"; // dom | file
///日志记录
function WriteLog(LogInfo) {
    try {
        LogInfo = JSON.stringify(LogInfo);
    } catch (e) {
        console.log(e);
    }
    try {
        var time = new Date();   // 程序计时的月从0开始取值后+1
        var m = time.getMonth() + 1;
        var t = time.getFullYear() + "-" + m + "-"
            + time.getDate() + " " + time.getHours() + ":"
            + time.getMinutes() + ":" + time.getSeconds();
        var TerminalDate = new Date();
        var YearInfo = TerminalDate.getFullYear();
        var MonthInfo = TerminalDate.getMonth() + 1;
        if (MonthInfo < 10)
            MonthInfo = "0" + MonthInfo;
        var DayInfo = TerminalDate.getDate();
        if (DayInfo < 10)
            DayInfo = "0" + DayInfo;
        var FileNamePrefix = "D:\\LogInfo\\" + YearInfo + MonthInfo + DayInfo + ".log";
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var f = fso.OpenTextFile(FileNamePrefix, 8, true);
        f.WriteLine(t + "   :   " + LogInfo);
        f.Close();
        f = null;
        fso = null;
    } catch (e) {
        console.log(e);
    }

}
// 返回一个以1252代码页读取的字符串，并封装了byteAt方法
// 我们也修改了slice方法使之返回一个相同的对象
function binaryString(str) {
    var r = str ? new String(str) : new String();
    // always return an object with a .length
    r.byteAt = function (index) {
        // 把Windows-1252字节转换成原始字节值
        if (this.charCodeAt(index) <= 255)
            return this.charCodeAt(index);
        var p = bogusWindows1252chars.indexOf(this.charAt(index));
        return correctLatin1Chars.charCodeAt(p);
    };
    r.slice = function (start, end) {
        return binaryString(this.substring(start, end));
    };
    return r;
}
function saveFile(fileName, text) {
    try {
        var adodbStream = new ActiveXObject("ADODB.Stream");
        adodbStream.Type = 2;
        // adodbStream.Charset = "iso-8859-1";
        adodbStream.Open();
        adodbStream.WriteText(text);
        adodbStream.SaveToFile("D:\\cache\\" + fileName.trim(), 2);
        adodbStream.Close();
        adodbStream = null;
    } catch (e) {
        console.log("保存storage文件出错!" + e);
    }
}
function saveHTMLFile(fileName, text,cb) {
    try {
        var adodbStream = new ActiveXObject("ADODB.Stream");
        // adodbStream.Type = 2;
        // adodbStream.Charset = "iso-8859-1";
        adodbStream.Open();
        adodbStream.WriteText(text);
        adodbStream.SaveToFile("D:\\download\\" + fileName.trim(), 2);
        adodbStream.Close();
        adodbStream = null;
        cb();
    } catch (e) {
        console.log("保存storage文件出错!" + e);
        cb(e);
    }
}
function getFile(fileName) {
    try {
        var binstream = new ActiveXObject("ADODB.Stream");
        binstream.Type = 2 /*adTypeText 文本模式 */;
        // binstream.Charset = "iso-8859-1";   // actually Windows codepage 1252 其实是Windows-1252
        binstream.Open();
        binstream.LoadFromFile("D:\\cache\\" + fileName.trim());
        return binstream.ReadText();
    } catch (e) {
        // console.log("读取storage文件出错!");
        return null;
    }
}
function HandleXMLDom(xml) {
    var xmlobj = {}
    for (let i = 0; i < xml.length; i++) {
        xmlobj[xml[i].getAttribute('key')] = xml[i].getAttribute('value');
    }
    return xmlobj;
}
function getxmlobj() {
    var xmlDom = getXmlDocumentByXmlString();
    var xml = xmlDom.getElementsByTagName('add');
    var xmlobj = HandleXMLDom(xml);
    return xmlobj;
}
function getXmlDocumentByXmlString() {
    var xmlString = getXMLFile('EquipmentInfo');
    var xmlDoc = null;
    if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlString, "text/xml");
    } else {
        //IE
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlString);
    }
    return xmlDoc;
}
function getXMLFile(fileName) {
    try {
        var binstream = new ActiveXObject("ADODB.Stream");
        binstream.Type = 2 /*adTypeText 文本模式 */;
        binstream.Charset = "UTF-8";   // actually Windows codepage 1252 其实是Windows-1252
        binstream.Open();
        binstream.LoadFromFile("D:\\cache\\" + fileName.trim() + '.xml');
        return binstream.ReadText();
    } catch (e) {
        // console.log("读取storage文件出错!");
        return null;
    }
}
function getJSONObject(key) {
    var val = getObject(key);
    if (val != null) {
        // console.log(val)
        val = JSON.parse(val);
        return (val == null) ? null : val;
    }
    return null;
}
function setJSONObject(key, value) {
    setObject(key, JSON.stringify(value));
}
function updateJSONitem(key, itemKey, itemValue) {
    var jo = getJSONObject(key);
    jo[itemKey] = itemValue;
    setObject(key, JSON.stringify(jo));

}
function removeJSONObject(key) {
    removeObject(key);
}



function getObject(key) {
    // return window.localStorage.getItem(key);
    if (storageMethod == "dom") {
        if (top.data == undefined) top.data = {};
        return top.data[key];
    } else if (storageMethod == "file") {
        return getFile(key);
    }
}
function setObject(key, value) {
    //window.localStorage.setItem(key, value);
    if (storageMethod == "dom") {
        if (top.data == undefined) top.data = {};
        top.data[key] = value;
    } else if (storageMethod == "file") {
        saveFile(key, value);
    }
}
function removeObject(key) {
    // window.localStorage.removeItem(key);
    if (storageMethod == "dom") {
        if (top.data == undefined) top.data = {};
        top.data[key] = null;
    } else if (storageMethod == "file") {

    }
}