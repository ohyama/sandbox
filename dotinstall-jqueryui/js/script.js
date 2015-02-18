$(function() {

	$('.box').draggable({
		helper: 'clone'
	});
	$('.target').droppable({
		accept: '.box',
		hoverClass: 'hover',
		tolerance: 'fit',
		drop: function(event, ui) {
			ui.draggable.clone().appendTo(this);
			console.log('dropped!');
		}
	});
})
