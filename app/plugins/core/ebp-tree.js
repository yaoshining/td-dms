/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','bootstrap','angular-ui-tree' ], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var treeModule = angular.module('ebp.tree',['ui.tree']);
    treeModule.directive('ebpTree',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: true,
            scope: {
                'treeData': '=',
                'dragEnabled': '=',
                'treeOptions': '=',
                'renderTemplateUrl': '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {

                    }
                }
            },
            template: '<div ui-tree data-drag-enable="dragEnabled">' +
                '<ul ui-tree-nodes ng-model="treeData" class="tree">' +
                    '<li ng-repeat="item in treeData" ui-tree-node data-collapsed="true" data-nodrag ng-include="renderTemplateUrl"' +
                        'ng-click="item.type==\'item\' && treeOptions.itemClicked($modelValue) || item.type==\'folder\' && treeOptions.folderClicked($modelValue)"' +
                        'ng-class="{\'tree-branch\': item.type==\'folder\',\'tree-item\': item.type==\'item\'}"></li>'+
                '</ul>'+
            '</div>'
        };
    }]);
});
