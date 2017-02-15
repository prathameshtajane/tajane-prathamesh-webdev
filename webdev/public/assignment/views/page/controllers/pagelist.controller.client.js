/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pagelistController",pagelistController);

        function pagelistController($routeParams,$location,PageService){
            var vm = this;
            vm.userid = $routeParams['uid'];
            vm.websiteid = $routeParams['wid'];

            function init() {
                vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);
            }
            init();

        }
}());
