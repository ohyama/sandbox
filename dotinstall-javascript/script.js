console.dir(window);
console.log(window.outerHeight);

var e = document.getElementById("msg");
e.textContent = 'hello';
e.style.color = 'red';
e.className = 'myStyle';

var g = document.createElement('p'),
	t = document.createTextNode('hello world');

document.body.appendChild(g).appendChild(t);
