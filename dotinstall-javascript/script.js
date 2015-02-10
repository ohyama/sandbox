/*
	- 文字列
	- 数値
	- 真偽値 true / false
	- オブジェクト
	-- 配列
	-- 関数
	-- 組み込みオブジェクト
	-- undefined
	-- null
 */

var msg = "hello world",
	x = 10,
	y = 20;

console.log(msg);
console.log(x + y);


(function(name) {
	console.log("hello " + name);
})("Tom");
