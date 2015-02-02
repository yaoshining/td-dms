/**
 * Created by 世宁 on 2014/12/19 0019.
 */
define(function(){
    return {
        '$root': [
            {name: '全部文件',sref: '{type: \'all\'}',iconClass: 'fa-files-o'},
            {name: '图片',sref: '{type: \'images\'}',iconClass: 'fa-file-image-o'},
            {name: '文档',sref: '{type: \'docs\'}',iconClass: 'fa-file-text-o'},
            {name: '视频',sref: '{type: \'videos\'}',iconClass: 'fa-file-video-o'},
            {name: '音乐',sref: '{type: \'audios\'}',iconClass: 'fa-file-audio-o'},
            {name: '其他',sref: '{type: \'others\'}',iconClass: 'fa-ellipsis-h'}
        ]
    };
});
