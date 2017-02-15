/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteController",websiteController);

        function websiteController($routeParams,$location,WebsiteService){
            var vm = this;
            vm.userid = $routeParams['uid'];

            function init() {
            }
            init();

            vm.websiteslist=WebsiteService.findWebsitesByUser(vm.userid);
        }
}());
