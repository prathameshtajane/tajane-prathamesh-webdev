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
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function getEditorTemplateUrl(type)
        {
            return 'views/widget/templates/editors/widget-'+type+'-editor.view.client.html';
        }

        function update(updatedwidget)
        {
            var UpdationFlag=WidgetService.UpdateWidget(vm.widgetId,updatedwidget);
            $location.url('/user/'+vm.userId+'/websites/'+vm.websiteId+'/page/'+vm.pageId+'/widget')
        }

        function deletewid()
        {
            var DeletionFlag=WidgetService.deleteWidget(vm.widgetId);
            $location.url('/user/'+vm.userId+'/websites/'+vm.websiteId+'/page/'+vm.pageId+'/widget')
        }
    }
})();
