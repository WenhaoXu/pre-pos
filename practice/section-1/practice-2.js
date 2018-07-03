'use strict';

function collectSameElements(collectionA, collectionB) {
    const result =new Array();
    for(var i=0;i<collectionA.length;i++){
      var collB=collectionB[0];
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
