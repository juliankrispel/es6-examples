var $loginPage = document.createElement('div');
append($loginPage);

var getFirstPage = function(){
  return `Hey there. Gimme your Username: <input id="username"/>
    and your password <input id="password"/><br/>
    <input id="next"/>`;
};

var login = function*(){
  var {user, pass} = yield getFirstPage();
}

var runLogin = function(login){
  var response = login.next();
  $loginPage.innerHTML = response;
};
