/**
 * Created by prathamesh on 2/15/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService,$location)
    {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        vm.getEditorTemplateUrl = getEditorTemplateUrl;
        vm.update = update;
        vm.deletewid = deletewid;

        function init()
        {
                WidgetService
                    .findWidgetById(vm.widgetId)
                    .success(function (widget) {
                        vm.widget=widget;
                        console.log(vm.widget);
                    });
        }
        init();

        function getEditorTemplateUrl(type)
        {
            console.log("Printing getEditorTemplateUrl from widget-edit.controller");
            console.log(type);
            return 'views/widget/templates/editors/widget-'+type+'-editor.view.client.html';
        }

        function update(updatedwidget)
        {

                WidgetService
                    .UpdateWidget(vm.widgetId,updatedwidget)
                    .success(function (updatedWidgetObj) {
            $location.url('/user/'+vm.userId+'/websites/'+vm.websiteId+'/page/'+vm.pageId+'/widget');})
        }

        function deletewid()
        {
                WidgetService
                    .deleteWidget(vm.widgetId)
                    .success(function (StatusObj) {
                        $location.url('/user/'+vm.userId+'/websites/'+vm.websiteId+'/page/'+vm.pageId+'/widget')
                    })
                    .error(function (errObj) {
                        vm.errorStatus=errObj.error;
                    })

        }

    }
})();
