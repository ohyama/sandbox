###
var score = 82;
if (score > 80) {
	alert("OK");	
}
###

score = 82
if score > 80
	console.log "score: #{score * 10}"

a = [1, 3, 5]
b = [
  1
  2
  3
]

m = [0..5]
n = [0...5]

console.log m[1..3]
console.log "world"[1..3]

m = name: "ohyama", score: 80
n =
  name: "ohyama"
  score: 90
l =
  name: "ohyama"
  score:
    a: 10
    b: 10
    c: 20

console.log m
console.log n
console.log l
