$(function() {
	var langs = ["ja", "cn", "en", "fr", "sp", "田中", "田口"];
	$('#langs').autocomplete({
		source: langs
	});

	$('button').button();
	$('#check').button();
	$('input[type=radio]').button();
	$('#set').buttonset();

	$('#datepicker').datepicker({
		dateFormat: 'yy-mm-dd',
		numberOfMonths: 3,
		minDate: -2,
		maxDate: "+2M"
	});

	$('.accordion').accordion();

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
