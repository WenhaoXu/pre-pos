'use strict';

function countSameElements(collection) {
  var key1 = new Array();
  var value1 = new Array();
  var json = [];
  for (var i = 0; i < collection.length; i++) {
   var coll= collection[i];
   var num=0;
   if(coll.indexOf('-')!=-1){
     let split = coll.split('-');
     coll=split[0];
     num=split[1];
   }
    if (key1.length == 0) {
      key1.push(coll);
      value1.push(1);
      continue;
    }
    else {
      for (var j = 0; j < key1.length; j++) {
        if (key1[j] == coll) {
          value1[j]++;
          console.log(key1[j]);
          console.log(value1[j]);
          break;
        }
        if (j == key1.length - 1 && key1[j] != coll) {
          key1.push(coll);
          if(num!=0){
            value1.push(num-1);
          }
          else{
            value1.push(0);
          }
        }
      }

    }
  }
  for (var i = 0; i < key1.length; i++) {
    var word = {key: key1[i], count: value1[i]};
    console.log(word)
    json.push(word);
  }
  return json;
}
