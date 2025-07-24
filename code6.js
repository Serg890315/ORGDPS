gdjs.DTP_40AIUS_41Code = {};
gdjs.DTP_40AIUS_41Code.localVariables = [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2= [];
gdjs.DTP_40AIUS_41Code.GDBackObjects1= [];
gdjs.DTP_40AIUS_41Code.GDBackObjects2= [];
gdjs.DTP_40AIUS_41Code.GDforvardObjects1= [];
gdjs.DTP_40AIUS_41Code.GDforvardObjects2= [];
gdjs.DTP_40AIUS_41Code.GDMenuObjects1= [];
gdjs.DTP_40AIUS_41Code.GDMenuObjects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects2= [];
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects1= [];
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects2= [];


gdjs.DTP_40AIUS_41Code.asyncCallback18226460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);

{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDforvardObjects1) asyncObjectsList.addObject("forvard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18226460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18228244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);

{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDforvardObjects1) asyncObjectsList.addObject("forvard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18228244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18230108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);

{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.5", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDforvardObjects1) asyncObjectsList.addObject("forvard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18230108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18231628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);

{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText(".", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDforvardObjects1) asyncObjectsList.addObject("forvard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18231628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18233756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDBackObjects1) asyncObjectsList.addObject("Back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18233756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18235292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDBackObjects1) asyncObjectsList.addObject("Back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18235292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18237172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDBackObjects1) asyncObjectsList.addObject("Back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18237172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.asyncCallback18238988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects2);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide();
}
for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDforvardObjects2[i].SetLabelText("СТР.5", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects2.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects2[i].SetLabelText("СТР.3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.DTP_40AIUS_41Code.localVariables.length = 0;
}
gdjs.DTP_40AIUS_41Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DTP_40AIUS_41Code.localVariables);
for (const obj of gdjs.DTP_40AIUS_41Code.GDBackObjects1) asyncObjectsList.addObject("Back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DTP_40AIUS_41Code.asyncCallback18238988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DTP_40AIUS_41Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite4"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite6"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite7"), gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDforvardObjects1[k] = gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDforvardObjects1[k] = gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDforvardObjects1[k] = gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forvard"), gdjs.DTP_40AIUS_41Code.GDforvardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDforvardObjects1[k] = gdjs.DTP_40AIUS_41Code.GDforvardObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDBackObjects1[k] = gdjs.DTP_40AIUS_41Code.GDBackObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDBackObjects1[k] = gdjs.DTP_40AIUS_41Code.GDBackObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDBackObjects1[k] = gdjs.DTP_40AIUS_41Code.GDBackObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDBackObjects1[k] = gdjs.DTP_40AIUS_41Code.GDBackObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.DTP_40AIUS_41Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DTP_40AIUS_41Code.GDBackObjects1);
{for(var i = 0, len = gdjs.DTP_40AIUS_41Code.GDBackObjects1.length ;i < len;++i) {
    gdjs.DTP_40AIUS_41Code.GDBackObjects1[i].SetLabelText(".", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.DTP_40AIUS_41Code.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DTP_40AIUS_41Code.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.DTP_40AIUS_41Code.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DTP_40AIUS_41Code.GDMenuObjects1[k] = gdjs.DTP_40AIUS_41Code.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.DTP_40AIUS_41Code.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


};

gdjs.DTP_40AIUS_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDBackObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDMenuObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDMenuObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects2.length = 0;

gdjs.DTP_40AIUS_41Code.eventsList8(runtimeScene);
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite3Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite4Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite6Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite7Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDBackObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDBackObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDforvardObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDforvardObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDMenuObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDMenuObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.DTP_40AIUS_41Code.GDNewPanelSprite2Objects2.length = 0;


return;

}

gdjs['DTP_40AIUS_41Code'] = gdjs.DTP_40AIUS_41Code;
