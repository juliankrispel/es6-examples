// Rest
var message = function(msg, ...friends){
  msg = 'I say ' + msg + ' to ' + friends.join(', ');
  return msg;
};

log(message('hello', 'Jack', 'Lisa', 'Bill', 'Phil'));


// Spread
var people = function(name, ...friends){
  var result = [name];
  result.push(...friends);
  return result;
};

log(people('Paul', 'Maria', 'Felix', 'Karl'));

var numbers = [1,2,3];
var moreNumbers = [4,5,6];
log([0, ...numbers, ...moreNumbers]);
