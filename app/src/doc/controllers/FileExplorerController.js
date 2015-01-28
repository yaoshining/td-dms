/**
 * Created by 世宁 on 2015/1/20 0020.
 */
define(['doc/module'],function(module){
    module.controller('FileExplorerController',['$scope',function($scope){
        $scope.view = 'list';
        $scope.detailView = false;
        $scope.folderAddHelper = {};
        $scope.showDetail = function(){
            $scope.detailView = true;
        };
        $scope.showFolderAddHelper = function(){
            $scope.newFolder = {
                name: '新建文件夹'
            };
            $scope.folderAddHelper.show = true;
        };
        $scope.dismissFolderAddHelper = function(){
            $scope.newFolder = undefined;
            $scope.folderAddHelper.show = false;
        };
        $scope.addFolder = function(){
            $scope.newFolder.size = '66KB';
            $scope.newFolder.createTime = new Date();
            $scope.items.unshift($scope.newFolder);
            $scope.dismissFolderAddHelper();
        };
        $scope.onFileSelect = function($files) {
            alert(1);
            $log.debug($files.length+' files were selected.');
            //$scope.selectedFiles = $scope.selectedFiles.concat($files);
            ////$files: an array of files selected, each file has name, size, and type.
            //for (var i = 0; i < $files.length; i++) {
            //    var file = $files[i];
            //    $scope.upload = attachService.upload(file,{
            //        progress: function(evt,config){
            //            config.file.percent = parseInt(100.0 * evt.loaded / evt.total);
            //        },
            //        success: function(data, status, headers, config){
            //            $timeout(function(){
            //                config.file.reponseData = data;
            //                config.file.finished = true;
            //                $scope.composeForm.attachments.push(data.id);
            //            },2000);
            //        }
            //    });
            //}
        };
        $scope.items = [{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        },{
            name: 'adsasd',
            size: '55KB',
            createTime: new Date()
        }];
    }]);
});
