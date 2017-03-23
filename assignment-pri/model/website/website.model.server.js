module.exports=function(app,mongoose){
    var q = require('q');

    var websiteSchema=require('../website/website.schema.server');
    var websiteModel=mongoose.model('websiteModel',websiteSchema);
    var userSchema=require('../user/user.schema.server');
    var userModel=mongoose.model('userModel',userSchema);

    var api={
        findWebsitesByUser:findWebsitesByUser,
        createWebsiteForUser:createWebsiteForUser,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;


    function updateWebsite(websiteid,websiteInfo) {
        var deferred = q.defer();
        console.log("calling updateWebsite from website.model.server.js");
        var websiteName=websiteInfo.name;
        var websiteDescription=websiteInfo.description;

        websiteModel.update({_id:websiteid},{$set:{'name':websiteName,'description':websiteDescription}},function (err,status){
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(findWebsiteById(websiteid));
            }
        });
        return deferred.promise;

    }

    function createWebsiteForUser(userid,website) {
        var deferred = q.defer();
        /*var websitedeveloperID=userid;*/
        console.log("createWebsiteForUser");
        console.log(website);
        var newWebsite=website;
        console.log("calling createWebsiteForUser from website.model.server.js");
        userModel.update({_id:userid},{$push:{websites:website}},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(createWebsiteAUUser(website));
            }
        });
        return deferred.promise;
    }

    function createWebsiteAUUser(website) {
        var deferred = q.defer();
        console.log("calling createWebsiteAUUser from website.model.server.js");
        websiteModel.create(website,function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function findWebsiteById(websiteid) {
        var deferred = q.defer();
        console.log("calling findUserById from website.model.server.js");
        websiteModel.findOne({_id:websiteid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }


    //check this function

    function findWebsitesByUser(userid) {
        var deferred = q.defer();
        console.log("calling findWebsitesByUser from website.model.server.js");
        websiteModel.find({_user:userid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function deleteWebsite(websiteid){
        var deferred = q.defer();
        console.log("calling deleteWebsite from website.model.server.js");
        console.log(websiteid);
        userModel.update({},{$pull:{websites: {_id:websiteid}}},function (err,status) {
            if(err){
                console.log("Error occurred in deleteWebsite");
                deferred.reject(new Error(err));
            }
            else {
                console.log(websiteid);
                deferred.resolve(removeWebsiteAUUser(websiteid));
            }
        });

        return deferred.promise;
    }

    function removeWebsiteAUUser(websiteids) {
        var deferred = q.defer();
        var websiteid=websiteids;
        websiteModel.remove({_id:websiteid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
    });
        return deferred.promise;
    }


};
