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
                vm.websiteslist=WebsiteService.findWebsitesByUser(vm.userid);
            }
            init();

        }
}());
