// Eine funktion die fuer uns die Ajax 
// requests uebernimmt
var http = function(type, url, cb){
  return new Promise(function(fullfill, reject){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(e){
      if(e.target.status === 200 && e.target.readyState === 4){
        fullfill(e);
      }
    };
    request.open(type, url, true);
    request.send();
  });
};

// Als erstes laden wir eine Seite 
// zum einloggen
http('get', 'examples/login.html').then(function(e){
  setHTML(e.target.responseText);

  // Dann registrieren wir die DOM Elemente 
  // die wir fuer unser Programm brauchen
  var username = document.getElementById('user');
  var password = document.getElementById('pass');
  var login    = document.getElementById('login');

  // Falls username und password stimmen, 
  // darf darf der Benutzer rein
  return new Promise(function(fullfill){
    login.addEventListener('click', function(){
      console.log('dwq');
      fullfill(username.value, password.value);
    });
  })
}).then(function(username, password){
  http('get', 'examples/authenticate.json').then(function(e){
    var resp = JSON.parse(e.target.responseText);
    if(resp.username === username.value && resp.password === password.value){
      http('get', 'examples/success.html').then(function(e){
        setHTML(e.target.responseText);
      });
    }else{
      var message  = document.getElementById('message');
      message.innerHTML = '<span style="color: red;"> Your Login Details are incorrect please try again</span>';
    }
  });
});
