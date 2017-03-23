/**
 * Created by prathamesh on 2/23/17.
 */
module.exports=function (app,model) {

    app.get("/api/user/:userId/website",findWebsitesByUser);
    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);


    var userModel=model.userModel;
    var websiteModel=model.websiteModel;
    var pageModel=model.pageModel;
    var widgetModel=model.widgetModel;

        function findWebsitesByUser(req,res){
            var userid=req.params.userId;
            websiteModel
                .findWebsitesByUser(userid)
                .then(function (websites){
                        res.json(websites);
                    },
                    function (error) {
                        res.sendStatus(500).send(error);
                    });

        }

        function createWebsite(req,res){
            var userid=req.params.userId;
            var websiteobject=req.body;
            console.log("createWebsite from website service server");
            console.log(websiteobject);
            NewWebsiteInfo={};
            NewWebsiteInfo._user=websiteobject.developerId;
            /*NewWebsiteInfo._id=(new Date()).getTime();*/
            NewWebsiteInfo.description=websiteobject.description;
            NewWebsiteInfo.name=websiteobject.name;
            NewWebsiteInfo.pages=[];
            NewWebsiteInfo.dateCreated=new Date();
            websiteModel
                .createWebsiteForUser(userid,NewWebsiteInfo)
                .then(function (website) {
                        res.json(website);
                    },
                    function (error) {
                        res.sendStatus(500).send(error);
                    });
            /*websites.push(NewWebsiteInfo);
            res.json(websites);*/
            return;
        }

        function findWebsiteById(req,res){
            var websiteid=req.params.websiteId;
            websiteModel
                .findWebsiteById(websiteid)
                .then(function (website) {
                        if(website){
                            res.json(website);
                        }
                        else{
                            res.sendStatus(404);
                        }},
                    function (error) {
                        res.sendStatus(404);
                    });

        }

        function updateWebsite(req,res){
            var websiteid=req.params.websiteId;
            var websiteobject=req.body;
            websiteModel
                .updateWebsite(websiteid,websiteobject)
                .then(function (website) {
                        if(website){
                            res.json(website);
                        }
                        else{
                            res.sendStatus(404);
                        }},
                    function (error) {
                        res.sendStatus(404);
                    });
            return;

            /*for(website in websites){
             if(websites[website]._id === websiteid)
             {
             var selectedIndex = websites.indexOf(websites[website]);
             break;
             }
             }
             websites[selectedIndex].name = websiteobject.name;
             websites[selectedIndex].description = websiteobject.description;
             res.json(websites);
            return;*/
        }

        function deleteWebsite(req,res){
            var websiteid=req.params.websiteId;
            websiteModel
                .deleteWebsite(websiteid)
                .then(function (website) {
                        res.sendStatus(200);
                    },
                    function (err) {
                        res.sendStatus(200);
                    });
            return;

            /*for(website in websites) {
                if (websites[website]._id === websiteid) {
                    var selectedIndex1 = websites.indexOf(websites[website]);
                    break;
                }
            }
            websites.splice(selectedIndex1,1);
            res.sendStatus(200);
            return;*/
        }
};
