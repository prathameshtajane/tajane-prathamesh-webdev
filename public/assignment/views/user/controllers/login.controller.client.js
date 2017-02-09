/**
 * Created by prathamesh on 2/7/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController",loginController);
        
        function loginController(UserService,$location) {
            var vm = this;
            vm.login = login;

            function init() {
            }
            init();

            function login(user) {
                if(user != undefined)
                {
                    var isUserPresent = UserService.findUserByCredentails(user.username, user.password);

                    if (isUserPresent != null) {
                        $location.url('/profile/' + isUserPresent._id);
                    }
                    else {
                        vm.error = 'User not found';
                    }
                }
                else{
                    vm.error = 'Enter Username Password';
                }
            }
        }

})();