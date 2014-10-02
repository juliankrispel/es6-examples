// Eine funktion die fuer uns die Ajax 
// requests uebernimmt
var http = function(type, url, cb){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(e){
    if(e.target.status === 200 && e.target.readyState === 4){
      cb(e);
    }
  };
  request.open(type, url, true);
  request.send();
};

// Als erstes laden wir eine Seite 
// zum einloggen
http('get', 'examples/login.html', function(e){
    setHTML(e.target.responseText);

    // Dann registrieren wir die DOM Elemente 
    // die wir fuer unser Programm brauchen
    var message  = document.getElementById('message');
    var username = document.getElementById('user');
    var password = document.getElementById('pass');
    var login    = document.getElementById('login');

    // Falls username und password stimmen, 
    // darf darf der Benutzer rein
    login.addEventListener('click', function(){
        http('get', 'examples/authenticate.json', function(e){
            var resp = JSON.parse(e.target.responseText);
            if(resp.username === username.value && resp.password === password.value){
                http('get', 'examples/success.html', function(e){
                    setHTML(e.target.responseText);
                });
            }else{
                message.innerHTML = '<span style="color: red;"> Your Login Details are incorrect please try again</span>';
            }
        });
    });
});

