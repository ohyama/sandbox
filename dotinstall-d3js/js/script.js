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

var p = d3.select('body').selectAll('p')

p.text('Hello D3.js').style('font-size', function() {
	return Math.floor(Math.random() * 20 + 10) + 'px'
});

/*
p.text('Hello D3.js').style({
	'font-size': '28px',
	'font-weight': 'bold'
});
*/

console.log(p.style('font-size'));

