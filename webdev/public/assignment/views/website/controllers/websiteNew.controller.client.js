/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteNewController",websiteNewController);
    
        function websiteNewController($routeParams,$location,WebsiteService)
        {
            var vm = this;
            vm.userid = $routeParams['uid'];

            vm.newwebsite={};
            vm.createWebsite=createWebsite;

            function init()
            {
                    WebsiteService
                        .findWebsitesByUser(vm.userid)
                        .success(function (websitelist) {
                            vm.websiteslist=websitelist;
                        })
                        .error(function (err) {
                            vm.webcreatestat="Website creation unsuccessful";
                        })
            }
            init();


            function createWebsite(userid,website)
            {

                WebsiteService
                    .createWebsite(userid,website)
                    .success(function (websitelist) {
                        vm.websiteslist=websitelist;
                        $location.url("/user/"+vm.userid+"/websites");
                    })
                    .error(function (err) {
                        vm.webcreatestat="Website creation unsuccessful";
                    })
            }
        }
}());
