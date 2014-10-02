/*********************
 * default arguments *
 ********************/

var createSquare = function(size = 100, color = 'yellow'){
  var square = document.createElement('div');
  square.style.width = size + 'px';
  square.style.height = size + 'px';
  square.style.background = color;
  return square;
}

append(createSquare());
