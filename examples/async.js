/* ****************************
 * Async Functions (ES7)
 * ***************************/

var delay = function(time){
  return new Promise(function(fulfill){
    setTimeout(fulfill, time);
  });
};

var go = async function(){
  await delay(1000);
  log('1 second passed');

  await delay(1000);
  log('2 second passed');

  await delay(1000);
  log('3 second passed');
};

go();
