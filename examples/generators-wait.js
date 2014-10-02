var wait = function(time){
  return new Promise(function(fulfill){
    setTimeout(function(){
      fulfill();
    }, time);
  });
}

var countSeconds = function*(){
  yield wait(1000);
  log('1 second passed');

  yield wait(1000);
  log('2 seconds passed');

  yield wait(1000);
  log('3 seconds passed');
};

var runPromiseGenerator = function(gen){
  gen.next().value.then(()=> runPromiseGenerator(gen));
};

runPromiseGenerator(countSeconds());
