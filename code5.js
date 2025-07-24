gdjs.ProverkiCode = {};
gdjs.ProverkiCode.localVariables = [];
gdjs.ProverkiCode.GDOsagoObjects1= [];
gdjs.ProverkiCode.GDOsagoObjects2= [];
gdjs.ProverkiCode.GDTechObjects1= [];
gdjs.ProverkiCode.GDTechObjects2= [];
gdjs.ProverkiCode.GDRKLObjects1= [];
gdjs.ProverkiCode.GDRKLObjects2= [];
gdjs.ProverkiCode.GDOTTSObjects1= [];
gdjs.ProverkiCode.GDOTTSObjects2= [];
gdjs.ProverkiCode.GDYellowButtonObjects1= [];
gdjs.ProverkiCode.GDYellowButtonObjects2= [];
gdjs.ProverkiCode.GDGreyButtonObjects1= [];
gdjs.ProverkiCode.GDGreyButtonObjects2= [];
gdjs.ProverkiCode.GDproverObjects1= [];
gdjs.ProverkiCode.GDproverObjects2= [];
gdjs.ProverkiCode.GDNewPanelSpriteObjects1= [];
gdjs.ProverkiCode.GDNewPanelSpriteObjects2= [];
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.ProverkiCode.GDNewPanelSprite2Objects1= [];
gdjs.ProverkiCode.GDNewPanelSprite2Objects2= [];


gdjs.ProverkiCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("prover"), gdjs.ProverkiCode.GDproverObjects1);
{for(var i = 0, len = gdjs.ProverkiCode.GDproverObjects1.length ;i < len;++i) {
    gdjs.ProverkiCode.GDproverObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Osago"), gdjs.ProverkiCode.GDOsagoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDOsagoObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDOsagoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDOsagoObjects1[k] = gdjs.ProverkiCode.GDOsagoObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDOsagoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://nsis.ru/products/osago/check/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RKL"), gdjs.ProverkiCode.GDRKLObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDRKLObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDRKLObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDRKLObjects1[k] = gdjs.ProverkiCode.GDRKLObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDRKLObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://мвд.рф/rkl?ysclid=m95kibl5zh33513056", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tech"), gdjs.ProverkiCode.GDTechObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDTechObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDTechObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDTechObjects1[k] = gdjs.ProverkiCode.GDTechObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDTechObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://rosstrah.ru/proverka-to/?ysclid=m95kk2036y859175542", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.ProverkiCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDYellowButtonObjects1[k] = gdjs.ProverkiCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.rst.gov.ru/portal/gost/home/activity/compliance/evaluationcompliance/AcknowledgementCorrespondence/vehicletypeapproval018?ysclid=mda089m0rx632497008", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.ProverkiCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDGreyButtonObjects1[k] = gdjs.ProverkiCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


};

gdjs.ProverkiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ProverkiCode.GDOsagoObjects1.length = 0;
gdjs.ProverkiCode.GDOsagoObjects2.length = 0;
gdjs.ProverkiCode.GDTechObjects1.length = 0;
gdjs.ProverkiCode.GDTechObjects2.length = 0;
gdjs.ProverkiCode.GDRKLObjects1.length = 0;
gdjs.ProverkiCode.GDRKLObjects2.length = 0;
gdjs.ProverkiCode.GDOTTSObjects1.length = 0;
gdjs.ProverkiCode.GDOTTSObjects2.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects1.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects2.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects1.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects2.length = 0;
gdjs.ProverkiCode.GDproverObjects1.length = 0;
gdjs.ProverkiCode.GDproverObjects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects2.length = 0;

gdjs.ProverkiCode.eventsList0(runtimeScene);
gdjs.ProverkiCode.GDOsagoObjects1.length = 0;
gdjs.ProverkiCode.GDOsagoObjects2.length = 0;
gdjs.ProverkiCode.GDTechObjects1.length = 0;
gdjs.ProverkiCode.GDTechObjects2.length = 0;
gdjs.ProverkiCode.GDRKLObjects1.length = 0;
gdjs.ProverkiCode.GDRKLObjects2.length = 0;
gdjs.ProverkiCode.GDOTTSObjects1.length = 0;
gdjs.ProverkiCode.GDOTTSObjects2.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects1.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects2.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects1.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects2.length = 0;
gdjs.ProverkiCode.GDproverObjects1.length = 0;
gdjs.ProverkiCode.GDproverObjects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects2.length = 0;


return;

}

gdjs['ProverkiCode'] = gdjs.ProverkiCode;
