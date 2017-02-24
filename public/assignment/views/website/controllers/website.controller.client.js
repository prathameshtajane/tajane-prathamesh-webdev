/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteController",websiteController);

        function websiteController($routeParams,WebsiteService){
            var vm = this;
            vm.userid = $routeParams['uid'];

            function init()
            {
                    WebsiteService
                        .findWebsitesByUser(vm.userid)
                        .success(function (websites) {
                            vm.websiteslist=websites;
                            })
            }
            init();

        }
}());
