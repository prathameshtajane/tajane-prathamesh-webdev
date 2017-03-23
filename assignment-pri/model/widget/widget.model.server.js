/**
 * Created by prathamesh on 3/21/17.
 */
module.exports=function(app,mongoose){
    var q = require('q');

    var websiteSchema=require('../website/website.schema.server');
    var websiteModel=mongoose.model('websiteModel',websiteSchema);
    var userSchema=require('../user/user.schema.server');
    var userModel=mongoose.model('userModel',userSchema);
    var widgetSchema=require('../widget/widget.schema.server');
    var widgetModel=mongoose.model('widgetModel',widgetSchema);
    var pageSchema=require('../page/page.schema.server');
    var pageModel=mongoose.model('pageModel',pageSchema);


    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    var api={
        findAllWidgetsForPage:findAllWidgetsForPage,
        createWidget:createWidget,
        findWidgetById:findWidgetById,
        updateWidget:updateWidget
    };
    return api;

    function findAllWidgetsForPage(pageid) {
        var deferred = q.defer();
        console.log("calling findAllWidgetsForPage from widget.model.server.js");
        widgetModel.find({_page:pageid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function createWidget(pageId, widget){
        var deferred = q.defer();
        console.log("calling createWidget from widget.model.server.js");
        console.log(widget);
        var newWidget=widget;
        pageModel.update({_page:pageId},{$push:{widgets:widget}},function (err,status) {
            if(err){
                console.log("Error State : In createWidget");
                deferred.reject(new Error(err));
            }else{
                console.log("Success State : In createWidget");
                deferred.resolve(createWidgetAUPage(widget));
            }
        });
        return deferred.promise;
    }

    function createWidgetAUPage(widget){
        var deferred = q.defer();
        console.log("calling createWidgetAUPage from widget.model.server.js");
        widgetModel.create(widget,function (err,status) {
            if(err){
                console.log("Error State : In createWidgetAUPage");
                console.log(err);
                deferred.reject(new Error(err));
            }else{
                console.log("Success State : In createWidgetAUPage");
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function findWidgetById(widgetid){
        var deferred = q.defer();
        console.log("calling findWidgetById from widget.model.server.js");
        widgetModel.findOne({_id:widgetid},function (err,status) {
            if(err){
                deferred.reject(new Error(err));
            }else{
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }
    
    function updateWidget(widgetid,widget) {
        
    }

    
};
