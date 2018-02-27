var recipes = {};
  
var obj = { prop: 1 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value});
}

var obj = { prop: 1 }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var obj = { prop: 1 }
var newObj = Object.assign({}, object);
function deleteFromObjectByKey(object, key) {
  delete newObj.key;
  return newObj;
}