/**
 * Created by prathamesh on 3/22/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetFlickerController", WidgetFlickerController)

    function WidgetFlickerController( WidgetService, $routeParams, $location) {
        var vm=this;
        vm.searchPhotos = searchPhotos;
        vm.selectPhoto=selectPhoto;


        function init() {
            vm.userID=$routeParams.uid;
            vm.pageID=$routeParams['pid'];
            vm.widgetID=$routeParams['wgid'];
            vm.websiteID=$routeParams['wid'];
            var promise=WidgetService.findAllWidget(vm.pageID);
            promise.success(function (widgets) {
                vm.widgets=widgets;
            })
        }
        init();

        function searchPhotos(searchTerm) {
            WidgetService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });
        }

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            var widget ={
                url: url,
                width: "100%"
            };
            WidgetService
                .updateWidget(widget, vm.widgetID, "IMAGE")
                .then(
                    function (response) {
                        console.log(response);
                        $location.url('/user/' + vm.userID+'/website/'+vm.websiteID+'/page/'+vm.pageID+'/widget');
                    },
                    function (error) {
                        console.log(error)
                    }
                );
        }

    }
})();