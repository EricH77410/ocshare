/**
 * Created by Eric Hamimi on 05/04/2016.
 */
Template.ArticleListe.helpers({
   articles: function () {
       return Articles.find();
   } 
});