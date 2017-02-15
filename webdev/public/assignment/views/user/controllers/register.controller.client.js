/**
 * Created by prathamesh on 2/8/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController",registerController);

    function registerController(UserService,$location){

        var vm =this;
        vm.registerUser=registerUser;

        function init() {
        }
        init();

        function registerUser(user){
            if(user != undefined) {
                if(user.password1 == user.password2) {
                    var isValidUserName = UserService.createUser(user.username, user.password1);
                    if (isValidUserName != null) {
                        $location.url('/profile/' + isValidUserName._id);
                    }
                    else {
                        vm.error = "Unable to register this User"
                    }
                }
                else{
                    vm.error="Password does not match.Cannot proceed."
                }
            }
            else
            {
                vm.error='Incomplete form submission.Cannot proceed'
            }

        }

    }

})();
