/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pagelistController",pagelistController);

        function pagelistController($routeParams,PageService,$location)
        {
            var vm = this;
            vm.userid = $routeParams['uid'];
            vm.websiteid = $routeParams['wid'];

            function init()
            {
                    PageService
                        .findPageByWebsiteId(vm.websiteid)
                        .success(function (listOfWebsites){
                            vm.pagelist=listOfWebsites;
                        })
                        .error(function (err) {
                            var answer=confirm(err.error);
                            if(answer){
                                $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page/new");
                            }
                            else{
                                $location.url("/user/"+vm.userid+"/websites")
                            }
                        })
            }
            init();
        }
}());
