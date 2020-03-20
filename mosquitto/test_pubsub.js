var mqtt = require('mqtt')
var client  = mqtt.connect({ host: 'localhost', port: 1883 })

client.on('connect', function () {
  client.subscribe('test_topic', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})
