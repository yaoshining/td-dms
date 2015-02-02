/**
 * Created by 世宁 on 2015/2/1 0001.
 */
define(['files/module'],function(module){
    module.filter('filesize',function(){
        return function(fileSize){
            var result = fileSize||0+'b';
            if(fileSize>8){
                var unitBytes = (fileSize/8).toFixed(2)+'B';
                result = unitBytes;
            }
            if(fileSize>1024*8){
                var unitKiloByte = (fileSize/8/1024).toFixed(2)+'KB';
                result = unitKiloByte;
            }
            if(fileSize>8*1024*1024){
                var unitMegabyte = (fileSize/8/1024/1024).toFixed(2)+'MB';
                result = unitMegabyte;
            }
            return result;
        }
    });
});
