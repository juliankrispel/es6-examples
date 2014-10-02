var wait = function(time){
  return new Promise(function(fulfill){
    setTimeout(function(){
      fulfill();
    }, time);
  });
}

wait(100)
  .then(()=>{ log('1 second passed'); })
  .then(()=> {return wait(1000)})
  .then(()=>{ log('2 seconds passed');} )
  .then(()=> {return wait(1000)})
  .then(()=>{ log('3 seconds passed');} );
