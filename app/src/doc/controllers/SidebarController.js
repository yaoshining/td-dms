/**
 * Created by 世宁 on 2015/1/20 0020.
 */
define(['doc/module','doc/data/menus'],function(module,menus){
    module.controller('SidebarController',['$scope',function($scope){
        $scope.menus = menus;
    }]);
});
