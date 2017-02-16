/**
 * Created by prathamesh on 2/15/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("WidgetService",WidgetService);
        
        function WidgetService() {

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

            this.findAllWidgets=findAllWidgets;
            this.findWidgetById = findWidgetById;
            this.UpdateWidget = UpdateWidget;
            this.deleteWidget = deleteWidget;
            this.createWidget = createWidget;
            this.findWidgetByPageId = findWidgetByPageId;

            function findAllWidgets() {
                return widgets;
            }


            function findWidgetByPageId(pageid) {
                var pageslist=[];
                for(var num in widgets){
                    if(parseInt(widgets[num].pageId) === parseInt(pageid)){
                        pageslist.push(widgets[num]);
                    }
                }
                return pageslist;
            }


            function findWidgetById(widgetId) {
                for(var w in widgets) {
                    if(parseInt(widgets[w]._id) === parseInt(widgetId)) {
                        return angular.copy(widgets[w]);
                    }
                }
                return null;
            }

            function UpdateWidget(widgetid,updatedwidget) {
                for(num in widgets){
                    if(parseInt(widgets[num]._id) === parseInt(widgetid))
                    {
                        if(updatedwidget.widgetType == "HEADING"){
                            widgets[num].name=updatedwidget.name;
                            widgets[num].text=updatedwidget.text;
                            widgets[num].size=updatedwidget.size;
                            return true;
                        }
                        if(updatedwidget.widgetType == "IMAGE"){
                            widgets[num].name=updatedwidget.name;
                            widgets[num].text=updatedwidget.text;
                            widgets[num].url=updatedwidget.url;
                            widgets[num].width=updatedwidget.width;
                            return true;
                        }
                        if(updatedwidget.widgetType == "YOUTUBE"){
                            widgets[num].name=updatedwidget.name;
                            widgets[num].text=updatedwidget.text;
                            widgets[num].url=updatedwidget.url;
                            widgets[num].width=updatedwidget.width;
                            return true;
                        }
                        if(updatedwidget.widgetType == "HTML"){
                            widgets[num].name=updatedwidget.name;
                            widgets[num].text=updatedwidget.text;
                            return true;
                        }
                    }
                }
                return null;
            }

            function deleteWidget(widgetid){
                for(num in widgets){
                    if (widgets[num]._id === widgetid) {
                        var selectedIndex1 = widgets.indexOf(widgets[num]);
                        break;
                    }
                }
                widgets.splice(selectedIndex1,1);
                return true;
            }

            function createWidget(pageid,widget){
                var new_widget={};
                new_widget.pageId=pageid;
                new_widget.widgetType=widget.toString();
                new_widget._id=(new Date()).getTime();
                widgets.push(new_widget);
                return new_widget;
            }

        }
})();