(function($){

var _tabIdDelegated=$.ui.tabs.prototype._tabId;

$.extend($.ui.tabs.prototype,{
	_tabId: function(a) {
		return $(a).attr("rel")||_tabIdDelegated.apply(this,arguments);
	}
});

})(jQuery);