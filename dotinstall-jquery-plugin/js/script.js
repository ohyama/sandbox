$(function() {

	$('img').click(function() {
		var msg = $(this).width() + ' x ' + $(this).height();
		$(this).wrap('<div style="position: relative;"></div>');
		var div = $('<div>')
					.text(msg)
					.css('position', 'absolute')
					.css('top', '0');
		$(this).after(div);
		console.log('aaa')
	})

});

