/**
 * Created by prathamesh on 3/21/17.
 */
module.exports=function(app,mongoose){

    var q = require('q');

    var userSchema=require('../user/user.schema.server');
    var userModel=mongoose.model('userModel',userSchema);

    var api={
        createUser:createUser,
        findUserByUsername:findUserByUsername,
        findUserById:findUserById,
        findUserByCredentails:findUserByCredentails,
        deleteUser:deleteUser,
        updateUser:updateUser
    };
    return api;

    function createUser(newUser){
        var deferred = q.defer();
        console.log("calling createUser from user.model.server.js");
        userModel.create(newUser,function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function findUserByUsername(username){
        var deferred = q.defer();
        console.log("calling findUserByUsername from user.model.server.js");
        userModel.findOne({username:username},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

   function findUserById(userid) {
       var deferred = q.defer();
       console.log("calling findUserById from user.model.server.js");
       userModel.findOne({_id:userid},function (err,status) {
           if(err){
               deferred.reject(new Error(err));
           }else{
               deferred.resolve(status);
           }
       });
       return deferred.promise;
   }

   function findUserByCredentails(username1,password1){
       var deferred = q.defer();
       console.log("calling findUserByCredentails from user.model.server.js");
       userModel.findOne({username:username1,password:password1},function (err,user) {
           if(err){
               deferred.reject(new Error(err));
           }else{
               deferred.resolve(user);
           }
       });
       return deferred.promise;
   }

   function deleteUser(userid) {
       var deferred = q.defer();
       console.log("calling deleteUser from user.model.server.js");
       userModel.remove({_id:userid},function (err,status) {
           if(err){
               deferred.reject(new Error(err));
           }else{
               deferred.resolve(status);
           }
       });
       return deferred.promise;

   }

   function updateUser(userid,userInfo) {
       var deferred = q.defer();

       usersEmail=userInfo.email;
       usersFirstName=userInfo.Firstname;
       usersLastName=userInfo.Lastname;
       /*user=ObjectId.fromString(userid);*/
       console.log("calling updateUser from user.model.server.js");
       userModel.update({_id:userid},{$set:{'firstName':usersFirstName,'lastName':usersLastName,'email':usersEmail}},function (err,status){
            if(err){
                   deferred.reject(new Error(err));
               }else{
                   deferred.resolve(findUserById(userid));
               }
           });
       return deferred.promise;
   }

};