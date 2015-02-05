/**
 * Created by 世宁 on 2015/1/31 0031.
 */
define(['doc/module'],function (module) {
    module.controller('ExplorerUploaderController',[
        '$scope',
        '$log',
        'attachService',
        '$timeout',function($scope,$log,attachService,$timeout){
        $scope.dialogView = {
            display: false,
            isCollapsed: false
        };
        $scope.selectedFiles = [];
        $scope.progressMasker = false;
        $scope.$on('fileSelected',function($event,$files){
            $scope.onFileSelect($files);
        });
        $scope.onFileSelect = function($files){
            angular.forEach($files,function(e){
                e.ext = e.name.slice(e.name.lastIndexOf('.')+1,e.name.length);
            });
            $scope.selectedFiles = $scope.selectedFiles.concat($files);
            $scope.dialogView.display = true;
            $timeout(function(){
                $scope.startUpload($files);
            },0);
        };
        $scope.startUpload = function($files){
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                var startTime = new Date();
                $scope.upload = attachService.upload(file,{
                    progress: function(evt,config){
                        config.file.lifecycle = 'uploading';
                        var timeSpan = (new Date()-startTime)/1000;
                        config.file.bitrate = evt.loaded/timeSpan;
                        config.file.percent = parseInt(100.0 * evt.loaded / evt.total);
                    },
                    success: function(data, status, headers, config){
                        $timeout(function(){
                            config.file.reponseData = data;
                            config.file.lifecycle = 'finished';
                            $scope.progressMasker = false;
                        },1000);
                    }
                });
            }
        }
    }]);
});
