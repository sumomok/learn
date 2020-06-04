/* eslint-disable */
function convertBase64UrlToBlob(base64) {
    var parts = base64.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; i++) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}
function binaryString(str) {
    var r = str ? new String(str) : new String();
    // always return an object with a .length
    r.byteAt = function (index) {
        // 把Windows-1252字节转换成原始字节值
        if (this.charCodeAt(index) <= 255)
            return this.charCodeAt(index);
        // @ts-ignore
        var p = bogusWindows1252chars.indexOf(this.charAt(index));
        // @ts-ignore
        return correctLatin1Chars.charCodeAt(p);
    };
    r.slice = function (start, end) {
        return binaryString(this.substring(start, end));
    };
    return r;
}
function saveFile(fileName, blob) {
    try {
        if (FileReader.prototype.readAsBinaryString === undefined) {
            FileReader.prototype.readAsBinaryString = function (fileData) {
                var binary = "";
                var pt = this;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var bytes = new Uint8Array(reader.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    //pt.result  - readonly so assign content to another property
                    pt.content = binary;
                    pt.onload(); // thanks to @Denis comment
                }
                reader.readAsArrayBuffer(fileData);
            }
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            if (!e) {
                var data = reader.content;
            }
            else {
                var data = e.target.result;
            }
            // @ts-ignore
            var adodbStream = new ActiveXObject("ADODB.Stream");
            adodbStream.Type = 2;
            adodbStream.Charset = "iso-8859-1";
            adodbStream.Open();
            adodbStream.WriteText(binaryString(data));
            adodbStream.SaveToFile(fileName, 2);
            adodbStream.Close();
            adodbStream = null;
        };
        reader.readAsBinaryString(blob);
    } catch (e) {
        console.log(e);
    }
}

function MyFiledownload(base64, name) {
    if (base64) {
        let blob = convertBase64UrlToBlob(base64)
        saveFile('D:\\' + name + '.png', blob);
    }
}
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}