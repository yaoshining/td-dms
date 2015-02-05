/**
 * Created by 世宁 on 2015/1/19 0019.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.drag',[]);
    module.directive('ebpDragEnter',['$timeout',function($timeout){
        return {
            restrict: "AC",
            replace: false,
            transclude: false,
            scope: {
                'ebpDragEnter': '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        if(angular.isFunction(scope.ebpDragEnter)){
                            element.on('dragenter',scope.ebpDragEnter);
                        }
                    }
                }
            }
        };
    }]);
});

