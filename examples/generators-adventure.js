var introText = 
  `Hello Stranger, welcome to the Land of the Generators <br/>
  Your future lies ahead of you! <br />
  Would you like to: <br />
  Go for a walk in the [f]orest <br/>
  [W]atch TV <br/>
  or play [r]ead a book<br/>`;

var isEndOfStory = false;
var storyElement = document.createElement('story');
storyElement.className = 'story';
append(storyElement);

var story = function*(val){
  console.log('hello', val);
  storyElement.innerHTML = 'Press any key to start';
  yield;
  storyElement.innerHTML = introText;
  yield ['f', 'w', 'r'];
};

var proceedStory = function(story, value){
  var nextValue = story.next(value);
  console.log(nextValue);
  onKeyUp(nextValue.value, function(val){
    proceedStory(story, val);
  })
}

proceedStory(story());



