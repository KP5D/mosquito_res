var mqtt = require('mqtt')
var client  = mqtt.connect({ host: 'localhost', port: 1883 })

client.on('connect', function () {
  client.subscribe('presence', function (err) {
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())

})
