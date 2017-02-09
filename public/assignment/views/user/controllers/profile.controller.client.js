/**
 * Created by prathamesh on 2/9/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController",profileController);

    function profileController($routeParams,$location,UserService) {

        var vm = this;
        var userId = $routeParams['uid'];

        function init() {
        }
        init();

        var storedUserInfo=UserService.findUserById(userId);

        vm.userID = storedUserInfo._id;
        vm.username = storedUserInfo.username;
        vm.email = storedUserInfo.email;
        vm.Firstname = storedUserInfo.firstName;
        vm.Lastname = storedUserInfo.lastName;

        /*if(storedUserInfo.email === "undefined")
        {
            vm.emailerror="Please add Email Address";
        }
        else{
            vm.email = storedUserInfo.email;
        }
        if(storedUserInfo.firstName === "undefined"){
            vm.firstnameerror="Please add First Name";
        }
        else{
        vm.Firstname = storedUserInfo.firstName;
        }
        if(storedUserInfo.lastName === "undefined"){
            vm.lastnameerror="Please add Last Name";
        }
        else{
        vm.Lastname = storedUserInfo.lastName;
        }*/



    }

})();
