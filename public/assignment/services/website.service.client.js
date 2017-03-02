(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);
    
    function WebsiteService($http) {

           var api={
               "findWebsitesByUser" : findWebsitesByUser,
               "findWebsiteById" : findWebsiteById,
               "updateWebsite" : updateWebsite,
               "deleteWebsite" : deleteWebsite,
               "createWebsite" : createWebsite

           };
            return api;
            
            function createWebsite(userid,website){
                return $http.post("/api/user/"+userid+"/website",website);
            }
            
            function findWebsitesByUser(userid){
                return $http.get("/api/user/"+userid+"/website");
            }
            
           function findWebsiteById(websiteid){
               return $http.get("/api/website/"+websiteid);

            }
            
            function updateWebsite(websiteid,updatedwebsite) {
                return $http.put("/api/website/"+websiteid,updatedwebsite);
            }
            
            function deleteWebsite(websiteid){
               return $http.delete("/api/website/"+websiteid);
            }
            
            
    }
    
    
})();