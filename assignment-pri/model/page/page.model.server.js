/**
 * Created by prathamesh on 3/21/17.
 */

module.exports=function(app,mongoose){
    var q = require('q');
    var websiteSchema=require('../website/website.schema.server');
    var websiteModel=mongoose.model('websiteModel',websiteSchema);
    var userSchema=require('../user/user.schema.server');
    var userModel=mongoose.model('userModel',userSchema);
    var pageSchema=require('../page/page.schema.server');
    var pageModel=mongoose.model('pageModel',pageSchema);

    var api={
        findAllPagesForWebsite:findAllPagesForWebsite,
        createPage:createPage,
        findPageId:findPageId,
        updatePage:updatePage,
        deletePage: deletePage
    };
    return api;

    function findPageId(pageid) {
        var deferred = q.defer();
        console.log("calling findPageId from page.model.server.js");
        pageModel.findOne({_id:pageid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function updatePage(pageid,pageInfo) {
        var deferred = q.defer();
        console.log("calling updatePage from website.model.server.js");
        var pageName=pageInfo.name;
        var pageTitle=pageInfo.title;
        var pageDescription=pageInfo.description;

        pageModel.update({_id:pageid},{$set:{'name':pageName,'description':pageDescription,'title':pageTitle}},function (err,status){
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(findPageId(pageid));
            }
        });
        return deferred.promise;
    }

    function createPage(websiteid,page) {
        var deferred = q.defer();
        /*var websitedeveloperID=userid;*/
        console.log("createPage");
        var newPage=page;
        newPage._website=websiteid;
        console.log("calling createPage from page.model.server.js");
        console.log(newPage);
        websiteModel.update({_id:websiteid},{$push:{pages:newPage}},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(createPageAUWebsite(page));
            }
        });
        return deferred.promise;
    }

    function createPageAUWebsite(page) {
        var deferred = q.defer();
        console.log("calling createPageAUWebsite from page.model.server.js");
        pageModel.create(page,function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }


    function findAllPagesForWebsite(websiteid) {
        var deferred = q.defer();
        console.log("calling findAllPagesForWebsite from page.model.server.js");
        pageModel.find({_website:websiteid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function deletePage(pageid){
        var deferred = q.defer();
        console.log("calling deletePage from page.model.server.js");
        console.log(pageid);
        websiteModel.update({},{$pull:{pages: {_id:pageid}}},function (err,status) {
            if(err){
                console.log("Error occurred in deletePage");
                deferred.reject(new Error(err));
            }
            else {
                console.log(pageid);
                deferred.resolve(removePageAUWebsite(pageid));
            }
        });

        return deferred.promise;
    }

    function removePageAUWebsite(pageids) {
        var deferred = q.defer();
        var pageid=pageids;
        pageModel.remove({_id:pageid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

};

