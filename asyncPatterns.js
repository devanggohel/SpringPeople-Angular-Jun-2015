function add(x,y){
   console.log("[sp] processing");
   var result = x + y;
   console.log("[sp] returning");
   return result;
}

function addClient(x,y){
   console.log("[sc] triggering add");
   var result = add(x,y);
   console.log("[sc] result = ", result);
}


function addAsync(x,y, onResult){
   console.log("[sp] processing");
   setTimeout(function(){
       var result = x + y;
       console.log("[sp] returning");
       onResult(result);
   },3000);
}

function addAsyncClient(x,y){
   console.log("[sc] triggering add");
   var result = addAsync(x,y, function(result){
       console.log("[sc] result = ", result);
   });
}
