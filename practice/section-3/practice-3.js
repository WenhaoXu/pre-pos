'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var key1 = new Array();
  var value1 = new Array();
  var json = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (key1.length == 0) {
      key1.push(collectionA[i]);
      value1.push(1);
      continue;
    }
    else {
      for (var j = 0; j < key1.length; j++) {
        if (key1[j] == collectionA[i]) {
          value1[j]++;
          console.log(key1[j]);
          console.log(value1[j]);
          break;
        }
        if (j == key1.length - 1 && key1[j] != collectionA[i]) {
          key1.push(collectionA[i]);
          value1.push(0);
        }
      }

    }
  }
  for (var i = 0; i < key1.length; i++) {
    var word = {key: key1[i], count: value1[i]};
    console.log(word)
    json.push(word);
  }
  var list=objectB.value;
  for(var i=0;i<list.length;i++){
    var word=list[i];
    for(var j=0;j<json.length;j++){
      if(word==json[j].key){
        json[j].count=json[j].count-parseInt(json[j].count/3);
      }
    }
  }
  return json;
}
