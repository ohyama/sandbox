$(function() {
	
	$('#sortable').sortable({
		cursor: 'wait',
		opacity: 0.5,
		update: function(event, ui) {
			console.log($(this).sortable("serialize"));
		}
	});
	

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
