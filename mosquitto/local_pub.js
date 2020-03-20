var mqtt = require('mqtt')
var client  = mqtt.connect({ host: 'localhost', port: 1883 })

client.on('connect', function () {
   client.publish('presence', 'Hello mqtt')
   client.end()
})

