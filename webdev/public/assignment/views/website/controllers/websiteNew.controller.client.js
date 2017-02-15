/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteNewController",websiteNewController);
    
        function websiteNewController($routeParams,$location,WebsiteService) {
            var vm = this;
            vm.userid = $routeParams['uid'];

            vm.newwebsite={};
            vm.createWebsite=createWebsite;

            function init() {
                vm.websiteslist=WebsiteService.findWebsitesByUser(vm.userid);
            }
            init();


            function createWebsite(userid,website){
                vm.webcreatestat=WebsiteService.createWebsite(userid,website);
                if(vm.webcreatestat ){
                    vm.websiteslist=WebsiteService.findWebsitesByUser(vm.userid);
                    $location.url("/user/"+vm.userid+"/websites");
                }
                else{
                    vm.webcreatestat="Website creation unsuccessful";
                }
            }
        }

}());
