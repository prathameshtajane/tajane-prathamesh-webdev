/**
 * Created by prathamesh on 3/21/17.
 */
/*module.exports=function(mongoose) {
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastname: String,
        email: String,
        phone: String,
        websites: [],
        dateCreated: Date
    }, {collection: 'user'});
    return UserSchema;
};*/

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [{websiteid:{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}}],
    dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;

