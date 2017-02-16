(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);
    
    function PageService() {

        var pages= [
                { _id: "321",
                    name: "GPost 1",
                    websiteId: "456",
                    title: "Lorem" },

                { _id: "432",
                    name: "GPost 2",
                    websiteId: "456",
                    title: "Lorem" },

                { _id: "543",
                    name: "GPost 3",
                    websiteId: "456",
                    title: "Lorem" },

                { _id: "666",
                    name: "FBPost 1",
                    websiteId: "123",
                    title: "Lorem" },

                { _id: "777",
                    name: "Tweet 2",
                    websiteId: "234",
                    title: "Lorem" },

                { _id: "888",
                    name: "Chess 3",
                    websiteId: "789",
                    title: "Lorem" }
            ];


           var api={
               "createPage":createPage,
               "findPageByWebsiteId":findPageByWebsiteId,
               "findPageById":findPageById,
               "updatePage":updatePage,
               "deletePage":deletePage
           };
            return api;


            function createPage(websiteid,page){
                page.websiteId=websiteid;
                page._id=(new Date()).getTime();
                pages.push(page);
                return true;
            }

            function findPageByWebsiteId(websiteId){
                var pages_of_website=[];
                for(var num in pages){
                    if(parseInt(pages[num].websiteId) === parseInt(websiteId)){
                        pages_of_website.push(pages[num]);
                    }
                }
                return pages_of_website;
            }

            function updatePage(pageid,updatedpage) {
                for(num in pages){
                    if(pages[num]._id === pageid)
                    {
                        var selectedIndex = pages.indexOf(pages[num]);
                        break;
                    }
                }
                pages[selectedIndex].name = updatedpage.name;
                pages[selectedIndex].title = updatedpage.title;
                return true;
            }

            function findPageById(pageid){
                for(var num in pages)
                {
                    if(parseInt(pages[num]._id) === parseInt(pageid)){
                        return angular.copy(pages[num]);
                    }
                }
                return null;
            }

            function deletePage(pageid){
                for(num in pages) {
                    if (pages[num]._id === pageid) {
                        var selectedIndex1 = pages.indexOf(pages[num]);
                        break;
                    }
                }
                pages.splice(selectedIndex1,1);
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