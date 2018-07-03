'use strict';

function collectSameElements(collectionA, collectionB) {
 const result =new Array();
   for(var i=0;i<collectionA.length;i++){
     for(var j=0;j<collectionB.length;j++){
          if(collectionA[i]==collectionB[j]){
            console.log(collectionA[i]);
            result.push(collectionA[i]);
            break;
          }
     }
   }
   return result;
}
