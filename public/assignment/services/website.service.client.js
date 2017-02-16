(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
    
    function WebsiteService() {

        var websites=[
            { _id: "123",
                name: "Facebook",
                developerId: "456",
                description: "Lorem" },

            { _id: "234",
                name: "Tweeter",
                developerId: "456",
                description: "Lorem" },

            { _id: "456",
                name: "Gizmodo",
                developerId: "456",
                description: "Lorem" },

            { _id: "567",
                name: "Tic Tac Toe",
                developerId: "123",
                description: "Lorem" },

            { _id: "678",
                name: "Checkers",
                developerId: "123",
                description: "Lorem" },

            { _id: "789",
                name: "Chess",
                developerId: "234",
                description: "Lorem" }];


           var api={
               "findWebsitesByUser" : findWebsitesByUser,
               "findWebsiteById" : findWebsiteById,
               "updateWebsite" : updateWebsite,
               "deleteWebsite" : deleteWebsite,
               "createWebsite" : createWebsite

           };
            return api;
            
            function createWebsite(userid,website){
                website.developerId=userid;
                website._id=(new Date()).getTime();
                websites.push(website);
                return true;
            }
            
            function findWebsitesByUser(userid){
                var websites_by_user=[];
                for(var website in websites){
                    if(websites[website].developerId === userid){
                        websites_by_user.push(websites[website]);
                    }
                }
                return websites_by_user;
            }
            
           function findWebsiteById(websiteid){
                for(var website in websites)
                {
                    if(parseInt(websites[website]._id) === parseInt(websiteid)){
                        return angular.copy(websites[website]);
                    }
                }
                return null;
            }
            
            function updateWebsite(websiteid,updatedwebsite) {
                for(website in websites){
                    if(websites[website]._id === websiteid)
                    {
                        var selectedIndex = websites.indexOf(websites[website]);
                        break;
                    }
                }
                websites[selectedIndex].name = updatedwebsite.name;
                websites[selectedIndex].description = updatedwebsite.description;
                return true;
            }
            
            function deleteWebsite(websiteid){
                for(website in websites) {
                    if (websites[website]._id === websiteid) {
                        var selectedIndex1 = websites.indexOf(websites[website]);
                        break;
                    }
                }
                    websites.splice(selectedIndex1,1);
                    return true;
                    /*if(websites.splice(selectedIndex1,1) != typeof(undefined){
                    return true;
                    }
                    else{
                        return false;
                    }*/


            }
            
            
    }
    
    
})();