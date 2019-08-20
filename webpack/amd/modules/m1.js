define(function () {
    var params = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<param>" +
    "<Infrared>1</Infrared>" +
    "<imgWidth>640</imgWidth>" +
    "<imgHeight>480</imgHeight>" +
    "<imgCompress>85</imgCompress>" +
    "<pupilDistMin>0</pupilDistMin>" +
    "<pupilDistMax>300</pupilDistMax>" +
    "<isActived>1</isActived>" +
    "<nirCount>1</nirCount>" +
    "<liveThreshold>0.7</liveThreshold>" +
    "<isAudio>0</isAudio>" +
    "<isText>1</isText>" +
    "<timeOut>30</timeOut>" +
    "<version>1.1.7.2</version>" +
    "<deviceIdxCol>0</deviceIdxCol>" +
    "<deviceIdxNir>1</deviceIdxNir>" +
    "<definitionAsk>10</definitionAsk>" +
    "<compareFacePos>1</compareFacePos>" +
    "<headLeft>30</headLeft>" +
    "<headRight>-30</headRight>" +
    "<headLow>-30</headLow>" +
    "<headHigh>30</headHigh>" +
    "<eyeDegree>10</eyeDegree>" +
    "<mouthDegree>30</mouthDegree>" +
    "<edage1>0.01</edage1>" +
    "<edage2>0.99</edage2>" +
    "<goodOne>0</goodOne>" +
    "<track>0</track>" +
    "<AlphaLayerType>5</AlphaLayerType>" +
    "<moveList>012</moveList>" +
    "<flip>0</flip>\n</param>\n";
    function openDevice() {
        var s = stdfcectl.openDevice(params);
        console.log("openDevice : " + s);
        return s;
    }
    function getImgBase() {
        var sImgXML = stdfcectl.SnapCurFrame().replace("data:image/png;base64,", "");
        var rData = $.parseXML(sImgXML);
        var imgBase = $(rData).find("imgBase").text();
        return imgBase;
    }
    return {openDevice,getImgBase}
});