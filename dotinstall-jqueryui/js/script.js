$(function() {
	var langs = ["ja", "cn", "en", "fr", "sp", "田中", "田口"];
	$("#langs").autocomplete({
		source: langs
	});

	$(".accordion").accordion();

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
