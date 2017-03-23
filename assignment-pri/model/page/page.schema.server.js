/**
 * Created by prathamesh on 3/21/17.
 */
var mongoose = require('mongoose');
var pageSchema = mongoose.Schema({
    _website: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}],
    name: String,
    title: String,
    description: String,
    dateCreated: {type: Date, default: Date.now()}
    /*widgets: [{type: mongoose.Schema.Types.ObjectId, ref:'widgetModel'}]*/
}, {collection: 'page'});
module.exports = pageSchema;

