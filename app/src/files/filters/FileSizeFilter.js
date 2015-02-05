/**
 * Created by 世宁 on 2015/2/1 0001.
 */
define(['files/module'],function(module){
    module.filter('filesize',function(){
        return function(fileSize){
            var result = (fileSize||0)+'B';
            if(fileSize>1024){
                var unitKiloByte = (fileSize/1024).toFixed(2)+'KB';
                result = unitKiloByte;
            }
            if(fileSize>1024*1024){
                var unitMegabyte = (fileSize/1024/1024).toFixed(2)+'MB';
                result = unitMegabyte;
            }
            return result;
        }
    });
});
