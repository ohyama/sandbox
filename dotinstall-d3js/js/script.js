/*
 * 要素を指定
 * select, selectAll
 *
 * 値を設定、取得
 * text
 * attr
 * style
 * append
 * style
 * append
 * remove
 */

var dataset = [12, 24, 36];
var p = d3.select('body').selectAll('p')

p.data(dataset).text(function(d, i) {
	return i + '番目は' + d + 'です。';
});


