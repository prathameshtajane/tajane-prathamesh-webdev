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
                templateUrl:"views/user/templates/login.view.client.html"
            })

    }
})();