/**
 * Created by prathamesh on 2/25/17.
 */
module.exports=function (app,model) {

    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post("/api/page/:pageId/widget",createWidget);
    app.get("/api/page/:pageId/widget",findWidgetByPageId);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.put("/api/widget/:widgetId",UpdateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);
    app.post ("/api/upload", upload.single('myFile'),uploadImage);

    var prefix = "../../../../../uploads/";


    var userModel=model.userModel;
    var websiteModel=model.websiteModel;
    var pageModel=model.pageModel;
    var widgetModel=model.widgetModel;

    var widgets=[
        { "_id": "123","name":"Header", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234","name":"Header", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345","name":"Image", "widgetType": "IMAGE", "pageId": "321", "width": 100,"text": "Image",
            "url": "http://st3.geg.cz/photo/405568_detail.jpg"},
        { "_id": "456","name":"HTML", "widgetType": "HTML", "pageId": "321", "text": "<p>HTML ipsum</p>"},
        { "_id": "567","name":"Header", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678","name":"Youtube", "widgetType": "YOUTUBE", "pageId": "321", "width": 100,"text": "YTube",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789","name":"HTML", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];



    function createWidget(req,res){
        var pageId=req.params.pageId;
        var widgetType=req.body;
        var new_widget={};
        new_widget._pageId=pageId;
        new_widget.name="HTML";
        new_widget.text="TEXT";
        new_widget.placeholder="1";
        new_widget.description="Description";
        new_widget.url="URL";
        new_widget.width="width";
        new_widget.height="height";
        new_widget.rows=2;
        new_widget.size=2;
        new_widget.class="class";
        new_widget.icon="icon";
        new_widget.order=2;
        new_widget.deletable=true;
        new_widget.formatted=true;
        new_widget.dateCreated=new Date();
        new_widget.type=widgetType[0].toString();
        /*new_widget._id=(new Date()).getTime();*/
        widgetModel
            .createWidget(pageId,new_widget)
            .then(function (widget) {
                    res.json(widget);
                },
                function (error) {
                    res.sendStatus(500).send(error);
                });

        /*widgets.push(new_widget);
        res.json(new_widget);*/
    }

    function findWidgetById(req,res){
        var widgetId=req.params.widgetId;
        widgetModel
            .findWidgetById(widgetId)
            .then(function (widget) {
                    if(widget){
                        res.json(widget);
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404);
                });

        /*for(var w in widgets) {
            if(parseInt(widgets[w]._id) === parseInt(widgetId)) {
                res.json(widgets[w]);
                return;
            }
        }*/
    }

    function deleteWidget(req,res){
        var widgetId=req.params.widgetId;
        for(num in widgets){
         if (widgets[num]._id === widgetId) {
         var selectedIndex1 = widgets.indexOf(widgets[num]);
         break;}
         }
        if(selectedIndex1 >= 0 && selectedIndex1 <= (widgets.length-1)) {
            widgets.splice(selectedIndex1, 1);
            res.status(200).send({status: "Widget deleted Succesfully."});
            return;}
        else{
            res.status(404).send({error: "Widget Deletion Failed"});
            return;
        }
    }

    function findWidgetByPageId(req,res){
        var pageId=req.params.pageId;
        widgetModel
            .findAllWidgetsForPage(pageId)
            .then(function (pages) {
                    if(pages){
                        res.json(pages);
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404);
                });

        /*var pageslist=[];
        for(var num in widgets){
            if(parseInt(widgets[num].pageId) === parseInt(pageId)){
                pageslist.push(widgets[num]);
            }
        }
        res.json(pageslist);
        return*/;
    }

    function UpdateWidget(req,res){
        var widgetId=req.params.widgetId;
        var newWidgetInfo=req.body;

        for(num in widgets){
            if(parseInt(widgets[num]._id) === parseInt(widgetId))
            {
                if(newWidgetInfo.widgetType == "HEADING"){
                    widgets[num].name=newWidgetInfo.name;
                    widgets[num].text=newWidgetInfo.text;
                    widgets[num].size=newWidgetInfo.size;
                    res.json(widgets[num]);
                    return;
                }
                if(newWidgetInfo.widgetType == "IMAGE"){
                    widgets[num].name=newWidgetInfo.name;
                    widgets[num].text=newWidgetInfo.text;
                    widgets[num].url=newWidgetInfo.url;
                    console.log(widgets[num].url);
                    widgets[num].width=newWidgetInfo.width;
                    res.json(widgets[num]);
                    return;
                }
                if(newWidgetInfo.widgetType == "YOUTUBE"){
                    widgets[num].name=newWidgetInfo.name;
                    widgets[num].text=newWidgetInfo.text;
                    widgets[num].url=newWidgetInfo.url;
                    widgets[num].width=newWidgetInfo.width;
                    res.json(widgets[num]);
                    return;
                }
                if(newWidgetInfo.widgetType == "HTML"){
                    widgets[num].name=newWidgetInfo.name;
                    widgets[num].text=newWidgetInfo.text;
                    res.json(widgets[num]);
                    return;
                }
            }
        }
        res.status(404).send({error:"Widget Updation Failed"});
        return;

    }

    function uploadImage(req,res){

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var pageId        = req.body.pageId;
        var widgetName    = req.body.widgetName;
        var widgetText    = req.body.widgetText;
        var userId        = req.body.userId;
        var websiteId     = req.body.websiteId;

        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        widgets.push({ "_id": widgetId,"name":widgetName, "widgetType": "IMAGE", "pageId": pageId, "width": width, "text": widgetText, "url": "../../../../../uploads/"+filename});

        res.redirect("../../assignment/index.html#/user/"+userId+"/websites/"+websiteId+"/page/"+pageId+"/widget");
    }

};
