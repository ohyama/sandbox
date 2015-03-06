opencv = require 'opencv'

opencv.readImage "./sample.png", (err, im) ->
  im.detectObject opencv.FACE_CASCADE, {}, (err, faces) ->
    for i in [0..faces.length - 1]
      x = faces[i]
      im.ellipse x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2
    im.save './out.png'
  
