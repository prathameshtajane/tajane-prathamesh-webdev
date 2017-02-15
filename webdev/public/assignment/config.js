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
                templateUrl:'views/user/templates/profile.view.client.html'
            })

            .when("/profile/:uid",{
                templateUrl:'views/user/templates/profile.view.client.html',
                controller : 'profileController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites",{
                templateUrl:'views/website/templates/website-list.view.client.html',
                controller : 'websiteController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/new",{
                templateUrl:'views/website/templates/website-new.view.client.html',
                controller : 'websiteNewController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/:wid",{
                templateUrl:'views/website/templates/website-edit.view.client.html',
                controller : 'websiteEditController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/:wid/page",{
                templateUrl:'views/page/templates/page-list.view.client.html',
                controller : 'pagelistController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/:wid/page/new",{
                templateUrl:'views/page/templates/page-new.view.client.html',
                controller : 'pageNewController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/:wid/page/:pid",{
                templateUrl:'views/page/templates/page-edit.view.client.html',
                controller : 'pageEditController',
                controllerAs:'model'
            })
    }
})();