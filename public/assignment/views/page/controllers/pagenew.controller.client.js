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

            vm.createPage=createPage;

            vm.newpage={};

            function init()
            {
                /*vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);*/
            }
            init();


            function createPage(websiteid,page)
            {
                    PageService
                        .createPage(websiteid,page)
                        .success(function (NewPageObj) {
                            $location.url("/user/"+vm.userid+"/websites/"+NewPageObj.websiteId+"/page");
                        })
                        .error(function (err) {
                            vm.webcreatestat=err.error;
                        });
            }
        }
}());
