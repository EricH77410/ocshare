/**
 * Created by Eric Hamimi on 05/04/2016.
 */

Template.CategoiesList.helpers({
   categories: function () {
       return Category.find();
   }
});