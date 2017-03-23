/**
 * Created by prathamesh on 3/21/17.
 */
module.exports=function (app) {

    var mongoose = require('mongoose');
    var userModel=require('../model/user/user.model.server')(app,mongoose);
    var websiteModel=require('../model/website/website.model.server.js')(app,mongoose);
    var pageModel=require('../model/page/page.model.server.js')(app,mongoose);
    var widgetModel=require('../model/widget/widget.model.server.js')(app,mongoose);
    var model={
        userModel:userModel,
        websiteModel:websiteModel,
        pageModel:pageModel,
        widgetModel:widgetModel
    };

    require('../services/page.service.server')(app,model);
    require('../services/user.service.server')(app,model);
    require('../services/website.service.server')(app,model);
    require('../services/widget.service.server')(app,model);

    console.log("Server Restarted!");
};