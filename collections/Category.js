/**
 * Created by Eric Hamimi on 05/04/2016.
 */

Category = new Mongo.Collection('category');

Globals.schemas.catSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Catégorie'
    }
});

Category.attachSchema(Globals.schemas.catSchema);

Category.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    }
});