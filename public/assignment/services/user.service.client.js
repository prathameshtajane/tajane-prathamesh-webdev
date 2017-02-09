/**
 * Created by prathamesh on 2/7/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('UserService',userService);
    
    function userService() {

        var users = [
            {_id: "123",
                username: "alice",
                password: "alice",
                firstName: "Alice",
                lastName: "Wonder",
                email:"alice@gmail.com" },

            {_id: "234",
                username: "bob",
                password: "bob",
                firstName: "Bob",
                lastName: "Marley",
                email:"bob@gmail.com" },

            {_id: "345",
                username: "charly",
                password: "charly",
                firstName: "Charly",
                lastName: "Garcia",
                email:"charly@gmail.com"},

            {_id: "456",
                username: "jannunzi",
                password: "jannunzi",
                firstName: "Jose",
                lastName: "Annunzi",
                email:"jose@gmail.com" }
        ]

        var api = {
            "findUserById" : findUserById,
            "findUserByCredentails" : findUserByCredentails,
            "createUser" : createUser,
            /*"findUserByUserName" : findUserByUserName*/
            /*"updateUser" : updateUser,
            "deleteUser" : deleteUser,*!/!*!/*/
        };
        return api;
        
        function findUserByCredentails(username,password){
            for(var u in users){
                if(users[u].username === username &&
                        users[u].password === password)
                {
                    return users[u];
                }
            }
            return null;
        }

        function createUser(username1,password1){
            for(var usr in users){
              if(users[usr].username === username1 ){
                  return null;
              }
            }
            var tempuser={};
            tempuser.username=username1;
            tempuser.password=password1;
            tempuser._id=(new Date()).getTime();
            users.push(tempuser);
            return tempuser;
        }

        function findUserById(uid){
            for(var usr in users){
                var userInfo = users[usr];
                if(users[usr]._id == uid){
                    return angular.copy(userInfo);
                }
            }
            return null;
        }

    }
})();
