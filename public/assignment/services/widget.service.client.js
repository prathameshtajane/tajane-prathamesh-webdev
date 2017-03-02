/**
 * Created by prathamesh on 2/15/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("WidgetService",WidgetService);
        
        function WidgetService($http) {


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
                return $http.get("/api/page/"+pageid+"/widget");
            }


            function findWidgetById(widgetId) {
                return $http.get("/api/widget/"+widgetId);
            }

            function UpdateWidget(widgetid,updatedwidget) {
                return $http.put("/api/widget/"+widgetid,updatedwidget);

            }

            function deleteWidget(widgetid){
                return $http.delete("/api/widget/"+widgetid);
            }

            function createWidget(pageId,widget){
                console.log(typeof widget);
                widgetObj=[widget];
                console.log(typeof widgetObj);
                return $http.post("/api/page/"+pageId+"/widget",widgetObj);
            }

        }
})();