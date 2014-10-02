//Lexical this
var wedding = {
  title: 'Jacks and Sarahs Wedding',
  guests: ['Bob', 'Lisa', 'Ed'],
  inviteGuests: function(){
    this.guests.forEach(guest => 
        log('Hey ' + guest + 
          ' you\'re invited to ' 
          + this.title));
  }
}

wedding.inviteGuests();
