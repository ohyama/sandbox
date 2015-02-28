class User
  constructor: (@name) ->
  hello: -> console.log "helle #{@name}"

class AdminUser extends User
  hello: ->
    console.log "Admin says..."
    super()

ohyama = new User "Ohyama"
ohyama.hello()

nakayama= new AdminUser "Nakayama"
nakayama.hello()

x = 20
rs = if x? then "found" else "not found"
console.log rs
