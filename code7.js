gdjs.PodderCode = {};
gdjs.PodderCode.localVariables = [];
gdjs.PodderCode.GDProekt_9595TelObjects1= [];
gdjs.PodderCode.GDProekt_9595TelObjects2= [];
gdjs.PodderCode.GDGAI_9595RossiiObjects1= [];
gdjs.PodderCode.GDGAI_9595RossiiObjects2= [];
gdjs.PodderCode.GDSaitObjects1= [];
gdjs.PodderCode.GDSaitObjects2= [];
gdjs.PodderCode.GDPodderObjects1= [];
gdjs.PodderCode.GDPodderObjects2= [];
gdjs.PodderCode.GDNewPanelSprite3Objects1= [];
gdjs.PodderCode.GDNewPanelSprite3Objects2= [];
gdjs.PodderCode.GDGreenButtonObjects1= [];
gdjs.PodderCode.GDGreenButtonObjects2= [];
gdjs.PodderCode.GDNewPanelSpriteObjects1= [];
gdjs.PodderCode.GDNewPanelSpriteObjects2= [];
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.PodderCode.GDNewPanelSprite2Objects1= [];
gdjs.PodderCode.GDNewPanelSprite2Objects2= [];


gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDProekt_95959595TelObjects1Objects = Hashtable.newFrom({"Proekt_Tel": gdjs.PodderCode.GDProekt_9595TelObjects1});
gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDGAI_95959595RossiiObjects1Objects = Hashtable.newFrom({"GAI_Rossii": gdjs.PodderCode.GDGAI_9595RossiiObjects1});
gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDSaitObjects1Objects = Hashtable.newFrom({"Sait": gdjs.PodderCode.GDSaitObjects1});
gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDPodderObjects1Objects = Hashtable.newFrom({"Podder": gdjs.PodderCode.GDPodderObjects1});
gdjs.PodderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.PodderCode.GDNewPanelSprite3Objects1);
{for(var i = 0, len = gdjs.PodderCode.GDNewPanelSprite3Objects1.length ;i < len;++i) {
    gdjs.PodderCode.GDNewPanelSprite3Objects1[i].getBehavior("Opacity").setOpacity(90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Proekt_Tel"), gdjs.PodderCode.GDProekt_9595TelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDProekt_95959595TelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://t.me/+YyeTvHxhpyBjZmVi", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GAI_Rossii"), gdjs.PodderCode.GDGAI_9595RossiiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDGAI_95959595RossiiObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://t.me/+NsQGIMHT2yk5MDk6", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sait"), gdjs.PodderCode.GDSaitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDSaitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://webtid.ru/gai", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Podder"), gdjs.PodderCode.GDPodderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDPodderObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.sberbank.com/sms/pbpn?requisiteNumber=", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.PodderCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PodderCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.PodderCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PodderCode.GDGreenButtonObjects1[k] = gdjs.PodderCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.PodderCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


};

gdjs.PodderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PodderCode.GDProekt_9595TelObjects1.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects2.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects1.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects2.length = 0;
gdjs.PodderCode.GDSaitObjects1.length = 0;
gdjs.PodderCode.GDSaitObjects2.length = 0;
gdjs.PodderCode.GDPodderObjects1.length = 0;
gdjs.PodderCode.GDPodderObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.PodderCode.GDGreenButtonObjects1.length = 0;
gdjs.PodderCode.GDGreenButtonObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects2.length = 0;

gdjs.PodderCode.eventsList0(runtimeScene);
gdjs.PodderCode.GDProekt_9595TelObjects1.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects2.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects1.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects2.length = 0;
gdjs.PodderCode.GDSaitObjects1.length = 0;
gdjs.PodderCode.GDSaitObjects2.length = 0;
gdjs.PodderCode.GDPodderObjects1.length = 0;
gdjs.PodderCode.GDPodderObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.PodderCode.GDGreenButtonObjects1.length = 0;
gdjs.PodderCode.GDGreenButtonObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects2.length = 0;


return;

}

gdjs['PodderCode'] = gdjs.PodderCode;
