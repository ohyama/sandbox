$(function() {

	$('#box').draggable({
		axis: 'x',
		opacity: 0.5,
		handle: '.handle',
		drag: function(event, ui) {
			console.log(ui.position);
		}
	});

})
