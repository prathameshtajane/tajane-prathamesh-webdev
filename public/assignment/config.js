/**
 * Created by prathamesh on 2/7/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .config(Config);
    
    function Config($routeProvider){
        $routeProvider
            .when("/login",{
                templateUrl:'views/user/templates/login.view.client.html',
                controller : 'loginController',
                controllerAs:'model'
            })

            .when("/register", {
                templateUrl:'views/user/templates/register.view.client.html',
                controller : 'registerController',
                controllerAs:'model'
                })

            .when("/profile", {
                templateUrl:'views/user/templates/profile.view.client.html',
                controller : 'profileController',
                controllerAs:'model'
            })

            .when("/profile/:uid",{
                templateUrl:'views/user/templates/profile.view.client.html',
                controller : 'profileController',
                controllerAs:'model'
                });

    }
})();