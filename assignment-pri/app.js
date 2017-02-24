module.exports=function (app) {
   require("./services/user.service.server")(app);
    require("./services/website.service.server")(app);
    console.log("Server Restarted Succesfully");
};
