'use strict';

function collectSameElements(collectionA, objectB) {
   const result =new Array();
    for(var i=0;i<collectionA.length;i++){
      for(var name in objectB){
      var collB=objectB[name];}
      console.log(collB);
      console.log(collB);
      for(var j=0;j<collB.length;j++){
           if(collectionA[i]==collB[j]){
             console.log(collectionA[i]);
             result.push(collectionA[i]);
             break;
           }
      }
    }
    console.log(result);
    return result;
}
