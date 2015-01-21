/**
 * Created by 世宁 on 2015/1/20 0020.
 */
define(['doc/module'],function(module){
    module.controller('FileExplorerController',['$scope',function($scope){
        $scope.view = 'list';
        $scope.detailView = false;
        $scope.showDetail = function(){
            $scope.detailView = true;
        };
    }]);
});
