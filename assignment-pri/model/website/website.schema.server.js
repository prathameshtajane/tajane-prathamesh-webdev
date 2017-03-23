/**
 * Created by prathamesh on 3/21/17.
 */
var mongoose = require('mongoose');
var WebsiteSchema = mongoose.Schema({
    _user: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}],
    name:String,
    description:String,
    pages:[],
    dateCreated:Date
}, {collection: 'website'});
module.exports = WebsiteSchema;

