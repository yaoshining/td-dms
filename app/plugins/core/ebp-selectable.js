/**
 * Created by 世宁 on 2015/1/30 0030.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','jquery-ui'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.selectable',[]);
    module.directive('ebpSelectable',[function(){
        return {
            restrict: "AC",
            replace: false,
            transclude: false,
            scope: {
                'uiOptions': '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var options = scope.uiOptions;
                        element.selectable(options).on('selectableselecting',function(event,ui){
                            angular.element(ui.selecting).scope().$broadcast('selecting');
                        }).on('selectableunselecting',function(event,ui){
                            angular.element(ui.unselecting).scope().$broadcast('unselecting');
                        }).on('selectableselected',function(event,ui){
                            angular.element(ui.selected).scope().$broadcast('selected');
                        });
                    }
                }
            },
            controller: ['$scope',function($scope){
                this.options = $scope.uiOptions;
            }]
        };
    }]).directive('selectableItem',[function(){
        return {
            restrict: "AC",
            replace: false,
            require: '^ebpSelectable',
            transclude: false,
            scope: {
                ngModel: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, selectableCtrl) {
                        if(scope.ngModel.checked && !iElement.hasClass('ui-selected')){
                            iElement.addClass('ui-selected');
                        }
                    },
                    post: function postLink(scope, element, iAttrs, selectableCtrl) {
                        var selectableOptions = selectableCtrl.options;
                        var events = selectableOptions.events;
                        scope.$on('selecting',function(event){
                            if(angular.isFunction(events.selecting)){
                                events.selecting(event,scope.ngModel);
                                scope.$apply();
                            }
                        });
                        scope.$on('unselecting',function(event){
                            if(angular.isFunction(events.unselecting)){
                                events.unselecting(event,scope.ngModel);
                                scope.$apply();
                            }
                        });
                        scope.$on('selected',function(event){
                            if(angular.isFunction(events.selected)){
                                events.selected(event,scope.ngModel);
                                scope.$apply();
                            }
                        });
                    }
                }
            }
        };
    }]);
});
