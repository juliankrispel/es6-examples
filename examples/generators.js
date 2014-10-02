// Generators can be used as iterators
var iterate = function*(num){
  var i = 0;
  while(i < num){
    i++;
    console.log(i);
    yield i;
  }
}


for(var b of iterate(5)){
  log(b);
}

var i = iterate(10);
log(i.next().value);
log(i.next().value);
