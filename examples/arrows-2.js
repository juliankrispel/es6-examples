/***********************************
 * Before Arrow Functions          *
 * The below will throw an error   *
 * because this.title doesn't      *
 * reach down to the parent scope  *
 * this doesn't happen with arrow  *
 * functions. Go to arrow-3.js to  *
 * see for yourself                *
 **********************************/

var wedding = {
  title: 'Jacks and Sarahs Wedding',
  guests: ['Bob', 'Lisa', 'Ed'],
  inviteGuests: function(){
    this.guests.forEach(
        function(guest){ 
          log('Hey ' + guest + ' you\'re invited to ' + this.title);
        });

  }
};

wedding.inviteGuests();
