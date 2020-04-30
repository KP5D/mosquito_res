# Pub/Sub with MQTT & mosquitto

1. Run mosquitto broker (before any Pub/Sub is done)

	> mosquitto -p '[PORT_NUMBER]'

	*Default is 1883*

2. Pub/Sub commands
	
	> mosquitto_sub -t '[TOPIC_NAME]'

	> mosquitto_sub -h localhost -p [PORT_NUMBER] -t '[TOPIC_NAME]' -m '[MESSAGE]'

3. Pub/Sub Combined

- Publish & subscribe on the same .js script

	> node local_pubsub.js

4. Pub + Sub

	> *(In separate terminals)*

	> node local_sub.js

	> node local_pub.js

5. mosquitto config file

- http://www.steves-internet-guide.com/mossquitto-conf-file/

6. Last Will & Testament

	> mosquitto_sub -d -i Subscriber123 -h localhost -t presence --will-topic presence2 --will-payload "Problem with Subscriber123"
