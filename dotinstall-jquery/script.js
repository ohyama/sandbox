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
	$('#sub > :eq(2)').siblings().css('color', 'red');
});

/*
 * $('') セレクタ
 * html p h1 ul
 * id #main
 * class .item
 *
 * > 直下の子要素
 *   それ以下の要素
 * , 複数の要素
 * + 隣接する要素
 *
 * フィルタ
 * :eq()
 * :gt(), :lt()
 * :even, :odd
 * :contains()
 * :first, :last
 */

