/**
 <b>Treeview</b>. A wrapper for FuelUX treeview element.
 It's just a wrapper so you still need to include FuelUX treeview script first.
*/
(function($ , undefined) {
	var $options = {
		'open-icon' : 'ebp-icon ' + 'fa fa-folder-open',
		'close-icon' : 'ebp-icon ' + 'fa fa-folder',
		'selectable' : true,
		'selected-icon' : 'ebp-icon ' + 'fa fa-check',
		'unselected-icon' : 'ebp-icon ' + 'fa fa-times'
	}

	$.fn.ebp_tree = function(options) {
		$options = $.extend({}, $options, options);
		this.each(function() {
			var $this = $(this);
			$this.html('<li class="tree-branch hide" data-template="treebranch" role="treeitem" aria-expanded="false">\
				<div class="tree-branch-header">\
					<div class="tree-branch-name"><i class="'+ 'ebp-icon ' + $options['close-icon']+'"></i><span class="tree-label"></span></div>\
				</div>\
				<ul class="tree-branch-children" role="group"></ul>\
				<div class="tree-loader hide" role="alert">\
				    <div class="tree-loading"><i class="ebp-icon fa fa-refresh fa-spin blue"></i></div>\
                </div>\
			</div>\
			<div class="tree-item hide" data-template="treeitem" role="treeitem">\
				<div class="tree-item-name">\
                    '+($options['unselected-icon'] == null ? '' : '<i class="'+ 'ebp-icon ' + $options['unselected-icon']+'"></i>')+'\
                    <span class="tree-label"></span>\
				</div>\
			</li>');
			$this.addClass($options['selectable'] == true ? 'tree-selectable' : 'tree-unselectable');

			$this.tree($options);
		});

		return this;
	}

})(window.jQuery);


