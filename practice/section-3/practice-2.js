'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var list=objectB.value;
  for(var i=0;i<list.length;i++){
    var word=list[i];
    for(var j=0;j<collectionA.length;j++){
      if(word==collectionA[j].key){
        collectionA[j].count=collectionA[j].count-parseInt(collectionA[j].count/3);
      }
    }
  }
  return collectionA;
}
