/**
 * Created by prathamesh on 2/24/17.
 */

module.exports=function (app,model) {
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/website/:websiteId/page",findPageByWebsiteId);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);



    var userModel=model.userModel;
    var websiteModel=model.websiteModel;
    var pageModel=model.pageModel;
    var widgetModel=model.widgetModel;

    /*var pages= [
        { _id: "321",
            name: "GPost 1",
            websiteId: "456",
            title: "Lorem" },

        { _id: "432",
            name: "GPost 2",
            websiteId: "456",
            title: "Lorem" },

        { _id: "543",
            name: "GPost 3",
            websiteId: "456",
            title: "Lorem" },

        { _id: "666",
            name: "FBPost 1",
            websiteId: "123",
            title: "Lorem" },

        { _id: "777",
            name: "Tweet 2",
            websiteId: "234",
            title: "Lorem" },

        { _id: "888",
            name: "Chess 3",
            websiteId: "789",
            title: "Lorem" }
    ];*/

    function createPage(req,res) {
        /*var websiteId=req.params.websiteId;
        var newPageInfo=req.body;
        /!*Creating an empty newPageObj in which all the parameters of a page will be updated*!/
        newPageObj={};
        newPageObj.websiteId=websiteId;
        newPageObj.name=newPageInfo.name;
        newPageObj.title=newPageInfo.title;
        newPageObj._id=(new Date()).getTime();
        /!*Pushing newPageObj onto the existing pages array*!/
        pages.push(newPageObj);

        /!*Validating newPageObj*!/
         if(newPageObj){
         res.json(newPageObj);
         return;}
         else{
             res.status(404).send({error:"New Website Page creation unsuccessful"});
             return;
         }*/

        var websiteId=req.params.websiteId;
        var newPageInfo1=req.body;
        console.log("createPage from page.service.server");
        console.log(newPageInfo1);
        NewPageInfo={};
        NewPageInfo._website=newPageInfo1.websiteId;
        /*NewWebsiteInfo._id=(new Date()).getTime();*/
        NewPageInfo.description=newPageInfo1.description;
        NewPageInfo.name=newPageInfo1.name;
        NewPageInfo.title=newPageInfo1.title;
        NewPageInfo.widgets=[];
        NewPageInfo.dateCreated=new Date();
        pageModel
            .createPage(websiteId,NewPageInfo)
            .then(function (page) {
                    console.log("returned page promise page object");
                    console.log(page);
                    res.json(page);
                },
                function (error) {
                    res.sendStatus(500).send(error);
                });
        /*websites.push(NewWebsiteInfo);
         res.json(websites);*/
        return;

    }

    function findPageByWebsiteId(req,res){
        var websiteid=req.params.websiteId;
        pageModel
            .findAllPagesForWebsite(websiteid)
            .then(function (pages){
                    res.json(pages);
                },
                function (error) {
                    res.sendStatus(500).send(error);
                });
        /*var pages_of_website = [];
        for (var num in pages) {
            if (parseInt(pages[num].websiteId) === parseInt(websiteId)) {
                pages_of_website.push(pages[num]);
            }
        }
        if (pages_of_website.length > 0) {
            res.json(pages_of_website);
            return;
        }
        else {
            res.status(404).send({error: "No pages to display for website.Do you want to create one?"})
            return;
        };*/
    }

    function findPageById(req,res) {
        var pageid=req.params.pageId;
        pageModel
            .findPageId(pageid)
            .then(function (page) {
                    if(page){
                        res.json(page);
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404).send({error: "Page Not Found"});
                });


        /*for(var num in pages)
         {
         if(parseInt(pages[num]._id) === parseInt(pageId)){
         res.json(pages[num]);
         return;
         }
         }
        res.status(404).send({error: "Page Not Found"});
        return;*/

    }

    function updatePage(req,res) {
        var pageId=req.params.pageId;
        var updatedPageInfo=req.body;
        pageModel
            .updatePage(pageId,updatedPageInfo)
            .then(function (page) {
                    if(page){
                        res.json(page);
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404);
                });
        return;


/*
        for(num in pages){
         if(parseInt(pages[num]._id) === parseInt(pageId))
         {
         var selectedIndex = pages.indexOf(pages[num]);
         break;
         }
         }
         pages[selectedIndex].name = updatedPageInfo.name;
         pages[selectedIndex].title = updatedPageInfo.title;
         if(pages[selectedIndex] != typeof undefined){
         /!*res.send(pages[selectedIndex]);*!/
         res.status(200).send({status: "Page Updated Succesfully."});
         return;}
        else{
             res.status(404).send({error: "Page Updatation Failed"});
             return;
         }*/
    }

    function deletePage(req,res){
        var pageId=req.params.pageId;
        pageModel
            .deletePage(pageId)
            .then(function (page) {
                    res.sendStatus(200);
                },
                function (err) {
                    res.sendStatus(200);
                });
        return;

        /*for(num in pages) {
            if (parseInt(pages[num]._id) === parseInt(pageId)){
                var selectedIndex1 = pages.indexOf(pages[num]);
                break;
            }
        }
        if(selectedIndex1 >= 0 && selectedIndex1 <= (pages.length-1)) {
            pages.splice(selectedIndex1, 1);
            res.status(200).send({status: "Page deleted Succesfully."});
            return;}
        else{
            res.status(404).send({error: "Page Deletion Failed"});
            return;
        }*/
    }
};