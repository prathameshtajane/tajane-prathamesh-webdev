/**
 * Created by prathamesh on 2/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .directive('wbdvSortable',WebdevSortable);

    function WebdevSortable(){
        function linkFunc(scope,element){
            element.sortable({axis:'y'});
        }

        return{
            link:linkFunc
        };
    }
})();
