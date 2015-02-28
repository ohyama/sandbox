sum = 0
total = (sum += i for i in [0..9] by 2)
console.log total

console.log "#{color}:#{i}" for color, i in ["red", "blue", "pink"] when color isnt "blue"


results =
  ohyama: 40
  nakayama: 30
  koyama: 50

console.log "#{name}:#{score}" for name, score of results


hello = (name = "ohyama")->
  "hello #{name}"
msg = hello "nakayama"
console.log msg

do -> console.log "do!!!!"
