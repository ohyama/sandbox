// $(document).ready(function() {

$(function() {

	/*
	 * $('') セレクタ
	 * html p h1 ul
	 * id #main
	 * class .item
	 *
	 */
	
	$('p').css('color', 'blue');

	/* フィルタ
	 * :eq()
	 * :gt(), :lt()
	 * :even, :odd
	 * :contains()
	 * :first, :last
	 */

	// $('#sub .item').css('color', 'blue');
	// $('p, .item').css('color', 'blue');
	// $('.item + .item').css('color', 'blue');

	/*
	 * > 直下の子要素
	 *   それ以下の要素
	 * , 複数の要素
	 * + 隣接する要素
	 */
	
	// $('#sub > li:eq(2)').css('color', 'red');
	// $('#sub > li:gt(1)').css('color', 'red');
	// $('#sub > li:even').css('color', 'red');
	// $('#sub > li:contains(4)').css('color', 'red');
	// $('#sub > li:first').css('color', 'red');
	
	/* メソッドを使ったDOM指定
	 * parent(), children()
	 * next(), prev()
	 * siblings() -兄弟要素
	 */
	// $('#sub').parent().css('color', 'red');
	// $('#sub > :eq(2)').next().css('color', 'red');
	// $('#sub > :eq(2)').siblings().css('color', 'red');
	
	/* 属性セレクタ
	 * =
	 * !=
	 * *=
	 * ^=
	 * $=
	 */
	//$('a[href="http://google.com"]').css('background', 'red');
	//$('a[href!="http://google.com"]').css('background', 'red');
	//$('a[href*="faithcreates"]').css('background', 'red');

	/* メソッド
	 * addClass / removeClass
	 * attr
	 * data
	 */
	//$('p').css('color', 'red').css('background', 'blue');
	//console.log($('p').css('color'));
	//$('p').addClass('mystyle');
	console.log($('a').attr('href'));

	/* text
	 * html
	 * val
	 * empty
	 */
	//$('p').text('hogehoge');

	/* before, after -> insertBefore, insertAfter
	 * prepend, append
	 */

	var li = $('<li>').text('just added');

	//$('#main > li:eq(1)').before(li);
	//li.insertBefore($('#main > li:eq(1)'));
	// $('#main').prepend(li);
	
	/* hide, show
	 * fadeOut, fadeIn
	 * toggle
	 */
	//$('#main').hide(800);
	/*
	$('#main').toggle(800);
	$('#main').toggle(800);
	$('#main').toggle(800);
	$('#main').toggle(800);
	$('#main').toggle(800);
	$('#main').fadeOut(800, function() {
		alert('hello');
	});
	*/

	$('#main').click(function() {
		alert('hello');
	});
	$('#main')
		.mouseover(function() {
			$(this).css('background', 'green');
		})
		.mouseout(function() {
			$(this).css('background', 'red');
		})
		.mouseover(function(e) {
			$(this).text(e.pageX);
		});
	

	$('#name')
		.focus(function() {
			$(this).css('background', 'red');
		})
		.blur(function() {
			$(this).css('background', 'white');
		});

	$('#members').change(function() {
			console.log($(this).val());
	});
});
