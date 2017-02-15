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

                function init() {
                }
                init();

                vm.pagelist=PageService.findPageByWebsiteId(vm.websiteid);
                vm.pagesEdit= PageService.findPageById(vm.pageid);
                vm.pageName=angular.copy(vm.pagesEdit);

                function updatePage() {
                    vm.status = PageService.updatePage(vm.pageName._id, vm.pageName);
                    if (vm.status) {
                        vm.PageUpdationStatus = "Page Updated Succesfully";
                    }
                    else {
                        vm.PageUpdationStatus = "Page Updation Failed";
                    }
                }

                function deletePage(){
                    vm.status = PageService.deletePage(vm.pageName._id);
                    if (vm.status) {
                        $location.url("/user/"+vm.userid+"/websites/"+vm.websiteid+"/page");
                    }
                    else {
                        vm.PageUpdationStatus = "Page Deletion Failed";
                    }
                }



            }
}());
