// Iterators can produce finite or infinite sequences
var numbers = [1,2,3];

var numberIterator = numbers[Symbol.iterator]();

console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());

console.log(numberIterator.next());

