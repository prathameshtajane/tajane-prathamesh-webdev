/**
 * Created by prathamesh on 2/7/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('UserService',userService);
    
    function userService($http) {

        var api = {
            "findUserById" : findUserById,
            "findUserByCredentails" : findUserByCredentails,
            "createUser" : createUser,
            "updateUser" : updateUser,
            "findUserByUserName" : findUserByUserName,
            "deleteUser" : deleteUser
        };
        return api;
        
        function findUserByCredentails(username,password){
            return $http.get("/api/user?username="+username+"&password="+password);
        }

        function createUser(newUserObj){
            return $http.post("/api/user",newUserObj);
        }

        function findUserById(uid){
        return $http.get("/api/user/"+uid);
        }

        function updateUser(userid,newUserInfo){

             return $http.put("/api/user/"+userid,newUserInfo);
        }

        function findUserByUserName(inp_username){
           return $http.get("/api/user?username="+inp_username);
        }

        function deleteUser(userid){
            return $http.delete("/api/user/"+userid);
        }

    }
})();
