module.exports=function (app,model) {
    app.post("/api/user",createUser);
    app.get("/api/user",findUser);
    app.get("/api/user/:userId",findUserById);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);

    var userModel=model.userModel;
    var websiteModel=model.websiteModel;
    var pageModel=model.pageModel;
    var widgetModel=model.widgetModel;


    /*var users = [
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
            email:"jose@gmail.com" }];*/


    function createUser(req,res){
        var newUserInfo=req.body;

        var tempuser={};
        tempuser.username=newUserInfo.username;
        tempuser.password=newUserInfo.password1;
        userModel
            .createUser(tempuser)
            .then(function (user) {
                res.json(user);
            },
            function (error) {
                res.sendStatus(500).send(error);
            });
    }

    function findUser(req,res){
        var username = req.query.username;
        var password = req.query.password;

        if(username && password){
        findUserByCredentails(req,res);
        }
        else{
            findUserByUsername(req,res);
        }
    }

    function findUserByUsername(req,res) {
        var username = req.query.username;
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                if(user){
                    if(user.length == 0){
                        res.sendStatus(404);
                    }
                    else{
                        res.json(user);
                    }
                }
                else{
                    res.sendStatus(404);
                }},
                function (error) {
                    res.sendStatus(404);
                });
    }

    function updateUser(req,res){
        var userid=req.body.userID;
        var newUserInfo=req.body;
        console.log("Calling updateUser user.service.server.js");
        userModel
            .updateUser(userid,newUserInfo)
            .then(function (user) {
                    res.json(user);
                    /*res.sendStatus(200);*/
                },
                function (err) {
                    res.sendStatus(200);
                });
    }

    function findUserById(req,res){
        var userid=req.params.userId;
        userModel
            .findUserById(userid)
            .then(function (user) {
                    if(user){
                        res.json(user);
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404);
                });

    }


    function findUserByCredentails(req,res){
        var queryUserName=req.query.username;
        var queryUserPassword=req.query.password;

        userModel
            .findUserByCredentails(queryUserName,queryUserPassword)
            .then(function (user) {
                    if(user){
                        if(user.length == 0){
                            res.sendStatus(404);
                        }
                        else{
                            res.json(user);
                        }
                    }
                    else{
                        res.sendStatus(404);
                    }},
                function (error) {
                    res.sendStatus(404);
                });

    }

    function deleteUser(req,res) {
        var userid = req.params.userId;
        userModel
            .deleteUser(userid)
            .then(function (user) {
                    res.sendStatus(200);
            },
            function (err) {
                res.sendStatus(200);
            });
    }
};
