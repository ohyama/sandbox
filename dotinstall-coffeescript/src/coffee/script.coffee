class User
  constructor: (@name) ->
  hello: -> console.log "helle #{@name}"

ohyama = new User "Ohyama"
ohyama.hello()

