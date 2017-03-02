(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);
    
    function PageService($http) {

           var api={
               "createPage":createPage,
               "findPageByWebsiteId":findPageByWebsiteId,
               "findPageById":findPageById,
               "updatePage":updatePage,
               "deletePage":deletePage
           };
            return api;


            function createPage(websiteid,newPage){
                return $http.post("/api/website/"+websiteid+"/page",newPage);
            }

            function findPageByWebsiteId(websiteid){
                return $http.get("/api/website/"+websiteid+"/page");
            }

            function updatePage(pageid,updatedpage) {
                return $http.put("/api/page/"+pageid,updatedpage);
            }

            function findPageById(pageid){
                return $http.get("/api/page/"+pageid);
            }

            function deletePage(pageid){
                return $http.delete("/api/page/"+pageid);
            }
    }
})();