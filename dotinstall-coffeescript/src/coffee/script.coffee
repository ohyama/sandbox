signal = "green"

switch signal
  when "red"
    console.long "STOP!"
  when "bule", "green" then console.log "GO!"
  when "yellow" then console.log "CAUTION"
  else console.log "Wrong Signal"


score = 82
if score > 80 then console.log "score: #{score * 10}"

console.log socre if score > 60

if score > 60
  console.log score
else
  console.log "ng"

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
