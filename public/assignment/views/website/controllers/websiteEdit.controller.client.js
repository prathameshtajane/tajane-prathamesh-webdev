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

            function init()
            {
                    WebsiteService
                        .findWebsitesByUser(vm.userid)
                        .success(function (websitelist) {
                            vm.websiteslist=websitelist;
                        });

                    WebsiteService
                        .findWebsiteById(vm.websiteid)
                        .success(function (websitename) {
                            vm.websitesEdit=websitename;
                            vm.websiteName=angular.copy(vm.websitesEdit);
                        });

            }
            init();

            function updateWebsite()
            {
                    WebsiteService
                        .updateWebsite(vm.websiteName._id, vm.websiteName)
                        .success(function (newWebsiteList) {
                        vm.WebsiteUpdationStatus = "Website Updated Succesfully";
                            WebsiteService
                                .findWebsitesByUser(vm.userid)
                                .success(function (updatedListByUserID) {
                                    vm.websiteslist=updatedListByUserID;
                                })
                        })
                        .error(function (err){
                            vm.WebsiteUpdationStatus = "Website Updation Failed";
                        });


                /*if (vm.status)
                {

                }
                else
                {
                    vm.WebsiteUpdationStatus = "Website Updation Failed";
                }*/
            }

            function deleteWebsite()
            {
                    WebsiteService
                        .deleteWebsite(vm.websiteName._id)
                        .success(function (newWebsitelist) {
                            $location.url("/user/"+ vm.userid +"/websites");
            })          .error(function (err) {
                            vm.WebsiteUpdationStatus = "Website Deletion Failed";
            });

            }
        }
}());
