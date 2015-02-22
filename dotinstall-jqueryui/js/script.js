$(function() {
	$('#bar').progressbar({
		value: 33
	});
	$('#slider').slider({
		value: 33,
		slide: function(event, ui) {
			console.log(ui.value);
			$('#bar').progressbar('option', 'value', ui.value);	
		}
	});

	var langs = ["ja", "cn", "en", "fr", "sp", "田中", "田口"];
	$('#langs').autocomplete({
		source: langs
	});

	$('button')
		.button()
		.click(function() {
			console.log('click!');
			$('#msg').dialog('open');
		});
	$('#msg').dialog({
		autoOpen: false,
		title: 'タイトル',
		buttons: {
			"OK": function() {
				$(this).dialog('close');
			}
		},
		modal: true
	});
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
