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
                    var promise = UserService.findUserByCredentails(user.username, user.password);

                    promise.success(function (user) {
                        if (user != null) {
                            $location.url('/profile/' + user._id);
                        }
                        else {
                            vm.error = 'User not found';
                        }

                    })

                }
                else{
                    vm.error = 'Enter Username Password';
                }
            }
        }

})();