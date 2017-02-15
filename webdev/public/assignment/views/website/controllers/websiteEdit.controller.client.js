/**
 * Created by prathamesh on 2/13/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteEditController",websiteEditController);

        function websiteEditController($routeParams,$location,WebsiteService){
            var vm = this;
            vm.userid = $routeParams['uid'];
            vm.websiteid = $routeParams['wid'];
            vm.updateWebsite=updateWebsite;
            vm.deleteWebsite=deleteWebsite;

            function init() {
            }
            init();

            vm.websiteslist=WebsiteService.findWebsitesByUser(vm.userid);
            vm.websitesEdit= WebsiteService.findWebsiteById(vm.websiteid);
            vm.websiteName=angular.copy(vm.websitesEdit);

            function updateWebsite() {
                vm.status = WebsiteService.updateWebsite(vm.websiteName._id, vm.websiteName);
                if (vm.status) {
                    vm.WebsiteUpdationStatus = "Website Updated Succesfully";
                }
                else {
                    vm.WebsiteUpdationStatus = "Website Updation Failed";
                }
            }

            function deleteWebsite(){
                vm.status = WebsiteService.deleteWebsite(vm.websiteName._id);
                if (vm.status) {
                    $location.url("/user/"+vm.userid+"/websites");
                }
                else {
                    vm.WebsiteUpdationStatus = "Website Deletion Failed";
                }
            }
        }
}());
