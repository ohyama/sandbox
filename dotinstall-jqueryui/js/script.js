$(function() {
	var selected = new Array();
	$('#selectable').selectable({
		selected: function(event, ui) {
			if (selected.indexOf(ui.selected.id) == - 1)
			{
				selected.push(ui.selected.id);
			}
			console.log(selected);
		},
		unselected: function(event, ui) {
			var id = ui.unselected.id;
			selected.splice(selected.indexOf(id), 1);
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
