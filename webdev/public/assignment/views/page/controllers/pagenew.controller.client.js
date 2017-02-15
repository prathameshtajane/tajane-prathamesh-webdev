/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageNewController",pageNewController);

        function pageNewController($routeParams,$location,PageService){
            var vm = this;
            vm.userid = $routeParams['uid'];
            vm.websiteid = $routeParams['wid'];
            vm.pageid = $routeParams['pid'];

            vm.newpage={};
            vm.createPage=createPage;

            function init() {
                vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);
            }
            init();


            function createPage(websiteid,page){
                vm.pagecreatestat=PageService.createPage(websiteid,page);
                if(vm.pagecreatestat ){
                    vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);
                    $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page");
                }
                else{
                    vm.webcreatestat="Website creation unsuccessful";
                }
            }
        }

}());
