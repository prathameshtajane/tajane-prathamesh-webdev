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

        vm.UpdateUserInfo = UpdateUserInfo;
        vm.deleteUser = deleteUser;

        function init() {

        }
        init();

        var storedUserInfo=UserService.findUserById(userId);


        vm.user={};
        vm.user.userID = storedUserInfo._id;
        vm.user.username = storedUserInfo.username;
        vm.user.email = storedUserInfo.email;
        vm.user.Firstname = storedUserInfo.firstName;
        vm.user.Lastname = storedUserInfo.lastName;


       /* if(typeof storedUserInfo.email === "undefined")
        {
            vm.emailerror="Please add Email Address";
        }
        else{
            vm.user.email = storedUserInfo.email;
        }

        if(typeof storedUserInfo.firstName === "undefined"){
            vm.firstnameerror="Please add First Name";
        }
        else{
        vm.user.Firstname = storedUserInfo.firstName;
        }
        if(typeof storedUserInfo.lastName === "undefined"){
            vm.lastnameerror="Please add Last Name";
        }
        else{
        vm.user.Lastname = storedUserInfo.lastName;
        }*/

       function UpdateUserInfo(user)
       {
        var UpdatedUserInfo=UserService.updateUser(parseInt(userId),user);
        if(UpdatedUserInfo === null){
            vm.error = "Failed to update recent request.";
        }
        else{
            vm.user.userID = UpdatedUserInfo._id;
            vm.user.username = UpdatedUserInfo.username;
            vm.user.email = UpdatedUserInfo.email;
            vm.user.Firstname = UpdatedUserInfo.firstName;
            vm.user.Lastname = UpdatedUserInfo.lastName;
            vm.success = "User Information Updation Succesfull";
        }
       }

       function deleteUser(userid){
           var userDeletionFlag=UserService.deleteUser(userid.userID);
           $location.url('/login');

       }

    }

})();
