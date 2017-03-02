/**
 * Created by prathamesh on 2/7/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .config(Config);
    
    function Config($routeProvider){

        $routeProvider
            .when("/",{
                templateUrl:'views/user/templates/login.view.client.html',
                controller : 'loginController',
                controllerAs:'model'
            })

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

            .when("/user/:uid/websites/:wid/page/:pid/widget",{
                templateUrl:'views/widget/templates/widget-list.view.client.html',
                controller : 'WidgetListController',
                controllerAs:'model'
            })

            .when("/user/:uid/websites/:wid/page/:pid/widget/new",{
                templateUrl:'views/widget/templates/widget-chooser.view.client.html',
                controller : 'WidgetChooserController',
                controllerAs:'model'
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid",{
                templateUrl: 'views/widget/templates/widget-edit.view.client.html',
                controller: "WidgetEditController",
                controllerAs: "model"
            });


    }
})();