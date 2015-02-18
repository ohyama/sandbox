$(function() {
	$('.box')
		.resizable({
			handles: 'all',
			acceptRatio: true,
			stop: function(event, ui) {
				console.log(ui.size.height, ui.size.width);
			}
		})
		.draggable();
})
