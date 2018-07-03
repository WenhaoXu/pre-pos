'use strict';

function collectSameElements(collectionA, objectB) {
 const result =new Array();
     // var collA=new Array();
   for(var n=0;n<collectionA.length;n++){
    var objectA=collectionA[n];
     for(var name in objectA){
       var collA=objectA[name];
       console.log(collA);
       for(var name in objectB){
         var collB=objectB[name];}
         console.log(collB);
         console.log(collB);
         for(var j=0;j<collB.length;j++){
              if(collA==collB[j]){
                console.log(collA);
                result.push(collA);
                break;
              }
         }
     }
   }
    console.log(result);
     return result;
}
