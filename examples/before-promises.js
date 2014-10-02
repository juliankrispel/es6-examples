// Before promises this is how we dealt with 
// asynchronouse controll flow

var wait = function(time, cb){
  setTimeout(cb, time);
};

wait(1000, function(){
  log('1 second passed');
  wait(1000, function(){
    log('2 seconds passed');
    wait(1000, function(){
      log('3 seconds passed');
    });
  });
});


