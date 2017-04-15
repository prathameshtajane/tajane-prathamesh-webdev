/**
 * Created by prathamesh on 2/14/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

    function WidgetListController($sce,$routeParams,WidgetService)
    {
        var vm = this;
        vm.userid=$routeParams.uid;
        vm.websiteId=$routeParams.wid;
        vm.pageId=$routeParams.pid;

        vm.getYoutubeEmbeddedUrl=getYoutubeEmbeddedUrl;
        vm.getTrustedHtml=getTrustedHtml;

        function init()
        {
                WidgetService
                    .findWidgetByPageId(vm.pageId)
                    .success(function (pageListObj) {
                        vm.widgets=pageListObj;
                        console.log("Printing Array widgets as per page");
                        console.log(pageListObj);
                    })
        }
        init();


        function getYoutubeEmbeddedUrl(rawurl)
        {
            var urlParts=rawurl.split('/');
            var id = urlParts[urlParts.length-1];
            var url="https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }

        function getTrustedHtml(rawHtml) {
            var trustedHtml=$sce.trustAsHtml(rawHtml);
            return trustedHtml;
        }
    }
})();
