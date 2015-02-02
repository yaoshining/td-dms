/**
 * Created by 世宁 on 2015/1/20 0020.
 */
define(['doc/module','angular'],function(module,angular){
    module.controller('FileExplorerController',[
        '$scope',
        '$state',
        '$log',
        function($scope,$state,$log){
        var self = this;
        $scope.detailView = true;
        $scope.view = $state.params.view;
        $scope.folderAddHelper = {};
        $scope.showListToolButtons = false;
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
            $scope.newFolder.type = 'folder';
            $scope.newFolder.modifyTime = new Date();
            $scope.documents.unshift($scope.newFolder);
            $scope.dismissFolderAddHelper();
        };
        $scope.selectedFiles = [];
        $scope.onFileSelect = function($files) {
            $log.debug($files.length+' files were selected.');
            $scope.selectedFiles = $scope.selectedFiles.concat($files);
            $scope.$broadcast('fileSelected',$files);
        };
        $scope.toggleCheckAll = function(){
            angular.forEach($scope.documents,function(e,i){
                e.checked = self.checkedAll;
            });
            $scope.showListToolButtons = self.checkedAll;
        };
        $scope.getCheckedItems = function(){
            var checkedItems = [];
            angular.forEach($scope.documents,function(e,i){
                if(e.checked){
                    checkedItems.push(e);
                }
            });
            return checkedItems;
        };
        $scope.toggleItemCheck = function(item){
            if(!item.checked){
                self.checkedAll = false;
                for(var i=0;i<$scope.documents.length;i++){
                    if($scope.documents[i].checked){
                        return;
                    }
                }
                $scope.showListToolButtons = false;
            }else {
                $scope.showListToolButtons = true;
                var checkedAll = true;
                angular.forEach($scope.documents,function(e,i){
                    if(!e.checked){
                        checkedAll = false;
                        return;
                    }
                });
                self.checkedAll = checkedAll;
            }
        };
        $scope.getViewName = function(){
            return $state.params.view;
        };
        $scope.selectableOptions = {
            filter: ".selectable-item",
            events: {
                selecting: function(event, doc) {
                    doc.checked = !(doc.checked);
                    $scope.toggleItemCheck(doc);
                },
                unselecting: function(event, doc) {
                    doc.checked = false;
                    $scope.toggleItemCheck(doc);
                }
            }
        };
        $scope.documents = [{
            name: '我的文档',
            type: 'folder',
            modifyTime: new Date()
        },{
            name: '我的音乐',
            type: 'folder',
            modifyTime: new Date()
        },{
            name: '我的视频',
            type: 'folder',
            modifyTime: new Date()
        },{
            name: '我的照片',
            type: 'folder',
            modifyTime: new Date()
        },{
            name: '这是个文件夹',
            type: 'folder',
            modifyTime: new Date()
        },{
            name: '这是个文本文件',
            size: '55KB',
            type: 'txt',
            modifyTime: new Date()
        },{
            name: '这是个excel文件',
            size: '55KB',
            type: 'xls',
            modifyTime: new Date()
        },{
            name: '这是个压缩文件',
            size: '55KB',
            type: 'zip',
            modifyTime: new Date()
        },{
            name: '这是个可执行文件',
            size: '55KB',
            type: 'exe',
            modifyTime: new Date()
        },{
            name: '这是个pdf文件',
            size: '55KB',
            type: 'pdf',
            modifyTime: new Date()
        },{
            name: '这是个visio文件',
            size: '55KB',
            type: 'vsd',
            modifyTime: new Date()
        },{
            name: '这是个幻灯片文件',
            size: '55KB',
            type: 'ppt',
            modifyTime: new Date()
        },{
            name: '这是个word文档',
            size: '55KB',
            type: 'doc',
            modifyTime: new Date()
        },{
            name: '这是个安卓安装包',
            size: '55KB',
            type: 'apk',
            modifyTime: new Date()
        },{
            name: '这是个AutoCAD文件',
            size: '55KB',
            type: 'dws',
            modifyTime: new Date()
        },{
            name: '这是个MindMap文件',
            size: '55KB',
            type: 'mmap',
            modifyTime: new Date()
        },{
            name: '这是个xmind或freemind文件',
            size: '55KB',
            type: 'xmind',
            modifyTime: new Date()
        },{
            name: '这是个ios安装包',
            size: '55KB',
            type: 'ipa',
            modifyTime: new Date()
        },{
            name: '这是个Photoshop文件',
            size: '55KB',
            type: 'psd',
            modifyTime: new Date()
        },{
            name: '这是个授权文件',
            size: '55KB',
            type: 'key',
            modifyTime: new Date()
        },{
            name: '这是个Illustrator文件',
            size: '55KB',
            type: 'ai',
            modifyTime: new Date()
        },{
            name: '这是个BT种子文件',
            size: '55KB',
            type: 'torrent',
            modifyTime: new Date()
        },{
            name: '这是张图片',
            size: '55KB',
            type: 'jpg',
            modifyTime: new Date()
        },{
            name: '这是首歌',
            size: '55KB',
            type: 'mp3',
            modifyTime: new Date()
        },{
            name: '这是个电影',
            size: '55KB',
            type: 'avi',
            modifyTime: new Date()
        }];
    }]);
});
