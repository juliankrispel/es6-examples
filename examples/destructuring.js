/*****************************
 * Destructuring Assignments *
 ****************************/

// Arrays
var [a, b, c] = [1, 2, 3];
log(a, b, c);

// Nested Arrays
var [d, [e,,f]] = ['Hello', [', ', 'bla', 'world']];

log(d + e + f);

// Objects
var {x, y} = {x: 123, y: 321};

log(x, y);

// Nested values in objects
var {address: {street: streetAddress}} = {address: {street: 'Burggasse 123'}};

log(streetAddress);
