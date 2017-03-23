/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageEditController",pageEditController);

        function pageEditController($routeParams,$location,PageService){
                var vm = this;
                vm.userid = $routeParams['uid'];
                vm.websiteid = $routeParams['wid'];
                vm.pageid = $routeParams['pid'];

                vm.updatePage=updatePage;
                vm.deletePage=deletePage;

                function init()
                {
                    /*vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);*/
                     PageService
                        .findPageById(vm.pageid)
                        .success(function (pageObj){
                            vm.pageName=pageObj;
                            console.log("findPageById success in pageedit.controller.client");
                        })
                         .error(function (err) {
                             var answer=confirm(err.error);
                             console.log("findPageById error in pageedit.controller.client");
                             if(answer){
                                 $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page/");
                             }
                             else{
                                 $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page/");
                             }
                         });

                    /*vm.pageName=angular.copy(vm.pagesEdit);*/
                }
                init();


                function updatePage()
                {
                        PageService
                            .updatePage(vm.pageName._id, vm.pageName)
                            .success(function (pageUpdationStatus) {
                                vm.PageUpdationStatus = "Page edit succesfull";
                                /*vm.PageUpdationStatus = pageUpdationStatus.status;*/
                            })
                            .error(function (err) {
                                vm.PageUpdationStatus = err.error;
                            });
                }

                function deletePage(){
                        PageService
                            .deletePage(vm.pageName._id)
                            .success(function (pageDeletionStatusObj) {
                                $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page");
                            })
                            .error(function (errObj) {
                                vm.PageUpdationStatus = errObj.error;
                            });
                }
        }
}());
