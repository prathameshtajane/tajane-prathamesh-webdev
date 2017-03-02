/**
 * Created by prathamesh on 2/23/17.
 */
module.exports=function (app) {

    app.get("/api/user/:userId/website",findWebsitesByUser);
    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    var websites=[
        { _id: "123",
            name: "Facebook",
            developerId: "456",
            description: "Lorem" },

        { _id: "234",
            name: "Tweeter",
            developerId: "456",
            description: "Lorem" },

        { _id: "456",
            name: "Gizmodo",
            developerId: "456",
            description: "Lorem" },

        { _id: "567",
            name: "Tic Tac Toe",
            developerId: "123",
            description: "Lorem" },

        { _id: "678",
            name: "Checkers",
            developerId: "123",
            description: "Lorem" },

        { _id: "789",
            name: "Chess",
            developerId: "234",
            description: "Lorem" }];

        function findWebsitesByUser(req,res){
            var userid=req.params.userId;
            var websites_by_user=[];
            for(var website in websites){
                if(websites[website].developerId === userid){
                    websites_by_user.push(websites[website]);
                }
            }
            res.json(websites_by_user);
            return;
        }

        function createWebsite(req,res){
            var userid=req.params.userId;
            var websiteobject=req.body;

            NewWebsiteInfo={};
            NewWebsiteInfo.developerId=userid;
            NewWebsiteInfo._id=(new Date()).getTime();
            NewWebsiteInfo.description=websiteobject.description;
            NewWebsiteInfo.name=websiteobject.name;
            websites.push(NewWebsiteInfo);
            res.json(websites);
            return;
        }

        function findWebsiteById(req,res){
            var websiteid=req.params.websiteId;
            for(var website in websites)
             {
             if(parseInt(websites[website]._id) === parseInt(websiteid)){
             res.json(websites[website]);
             return;
             }
             }
        }

        function updateWebsite(req,res){
            var websiteid=req.params.websiteId;
            var websiteobject=req.body;

            for(website in websites){
             if(websites[website]._id === websiteid)
             {
             var selectedIndex = websites.indexOf(websites[website]);
             break;
             }
             }
             websites[selectedIndex].name = websiteobject.name;
             websites[selectedIndex].description = websiteobject.description;
             res.json(websites);
            return;
        }

        function deleteWebsite(req,res){
            var websiteid=req.params.websiteId;
            for(website in websites) {
                if (websites[website]._id === websiteid) {
                    var selectedIndex1 = websites.indexOf(websites[website]);
                    break;
                }
            }
            websites.splice(selectedIndex1,1);
            res.sendStatus(200);
            return;
        }
};
