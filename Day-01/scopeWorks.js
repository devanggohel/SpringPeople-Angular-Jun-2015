scope.myWatch = function(expr, watcherFn){
   scope.watcherFns = scope.watcherFns || [];
   watcherFn.expr = expr;
   watcherFn.value = scope.$eval(expr);
   scope.watcherFns.push(watcherFn);
}

scope.myWatch("name", function(){
  console.log("name changed");
})

scope.myApply = function(fn){
    fn();
    scope.watcherFns.forEach(function(watcherFn){
       var currentValue = scope.$eval(watcherFn.expr);
       if (currentValue !== watcherFn.value){
            watcherFn.value = currentValue;
            watcherFn();
       }
    });
}

scope.myApply(function(){
     scope.name = "Suresh";
})



