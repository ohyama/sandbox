$(function() {

	$('#box').draggable();
	$('#target').droppable({
		accept: "#box",
		drop: function(event, ui) {
			console.log('dropped"');
		}
	});
})
