// Generators can be used as iterators
var iterate = function*(num = 100){
  var i = 0;
  while(i < num){
    i++;
    yield i;
  }
}

var i = iterate();
log(i.next().value);
log(i.next().value);
