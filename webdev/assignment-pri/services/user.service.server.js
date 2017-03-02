module.exports=function (app) {
    app.post("/api/user",createUser);
    app.get("/api/user",findUser);
    app.get("/api/user/:userId",findUserById);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);



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
            email:"jose@gmail.com" }];


    function createUser(req,res){
        console.log("reached createUser");
        var newUserInfo=req.body;
        console.log(newUserInfo);
        var tempuser={};
        tempuser.username=newUserInfo.username;
        tempuser.password=newUserInfo.password1;
        tempuser._id=(new Date()).getTime();
        users.push(tempuser);
        res.json(tempuser);
        return;
    }

    function findUser(req,res){
        var username = req.query.username;
        var password = req.query.password;

        if(username && password){
        console.log("Both username and password present so calling findUserByCredentails");
        findUserByCredentails(req,res);
        }
        else{
            findUserByUsername(req,res);
        }
    }

    function findUserByUsername(req,res) {
        console.log("Only username present so calling findUserByUsername");
        var user = users.find(function (u) {
           return u.username === req.query.username;
        });
        if(user){
            res.json(user);
        }
        else{
            res.sendStatus(404);
        }
    }

    function updateUser(req,res){
        console.log("Reached updateUser");
        var userid=req.params.userId;
        var newUserInfo=req.body;
        for(var usr in users){
            if(parseInt(userid) === parseInt(users[usr]._id))
            {
                var selectedIndex = usr;
                users[selectedIndex].email=newUserInfo.email;
                users[selectedIndex].firstName=newUserInfo.Firstname;
                users[selectedIndex].lastName=newUserInfo.Lastname;
                /*return angular.copy(users[usr]);*/
                res.json(users[usr]);
                return;
            }
        }
    }

    function findUserById(req,res){
        var userid=req.params.userId;
        /*console.log(userid);*/
        var user = users.find(function (user){
            return user._id == userid;
        });
        res.json(user);
    }


    function findUserByCredentails(req,res){
        var queryUserName=req.query.username;
        var queryUserPassword=req.query.password;
        /*console.log(queryUserName);
        console.log(queryUserPassword);*/

        var user=users.find(function(user){
           return user.password==queryUserPassword && user.username==queryUserName
        });
        console.log(user);
        res.send(user);
    }

    function deleteUser(req,res) {
        console.log("Reached deleteUser");
        var userid = req.params.userId;
        /*var user=users.find(function (u) {
            console.log(u);
            return parseInt(u._id)===parseInt(userid);
        });*/
        for(var usr in users){
            if (parseInt(users[usr]._id) === parseInt(userid)){
                var index_tobe_deleted=users.indexOf(users[usr]);
                users.splice(index_tobe_deleted,1);
                break;
            }
        }
        res.sendStatus(200);
    }
};
