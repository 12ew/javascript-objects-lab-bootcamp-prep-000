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
var newObj = deleteFromObjectByKey(obj, 'prop')

function deleteFromObjectByKey(object, key) {
  return Object.delete
}