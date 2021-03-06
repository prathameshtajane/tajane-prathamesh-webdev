/**
 * Created by prathamesh on 2/15/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController($routeParams, $location,WidgetService)
    {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        vm.createwidget = createwidget;

        function init() {
        }
        init();

        function createwidget(widgetString)
        {
            WidgetService
                .createWidget(vm.pageId,widgetString)
                .success(function (newWidgetObj) {
                    $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'
                        +vm.pageId+'/widget/'+newWidgetObj._id);
                })

        }


    }
})();
