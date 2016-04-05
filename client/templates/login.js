/**
 * Created by Eric Hamimi on 05/04/2016.
 */
Template.Login.events({
   'submit form': function(evt, template){
       evt.preventDefault();

       var user = $('#username').val();
       var password = $('#password').val();

       Meteor.loginWithPassword(user,password, function (err) {
           if (err){
               alert(err.reason);
           }
       });
   }
});