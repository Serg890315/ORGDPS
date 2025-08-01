
if (typeof gdjs.evtsExt__Geolocation__LocatePlayer !== "undefined") {
  gdjs.evtsExt__Geolocation__LocatePlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Geolocation__LocatePlayer = {};


gdjs.evtsExt__Geolocation__LocatePlayer.userFunc0x9be788 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
this.logger = (this.logger || new gdjs.Logger("Geolocation extension"))

if (navigator && navigator.geolocation) navigator
    .geolocation
    .getCurrentPosition(
        location => {
            const variable = eventsFunctionContext.getArgument("callback");
            for (const child in location.coords) {
                variable.getChild(child).setNumber(location.coords[child]);
            }
        },
        (error) => this.logger.error(`Couldn't locate player: ` + error.message),
        { enableHighAccuracy: true }
    );

};
gdjs.evtsExt__Geolocation__LocatePlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Geolocation__LocatePlayer.userFunc0x9be788(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Geolocation__LocatePlayer.func = function(runtimeScene, callback, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Geolocation"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Geolocation"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "callback") return callback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Geolocation__LocatePlayer.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Geolocation__LocatePlayer.registeredGdjsCallbacks = [];