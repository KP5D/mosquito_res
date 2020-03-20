import paho.mqtt.client as mqtt
 	 
def on_connect(client, userdata, flags, rc):
	print("Connected with result code "+str(rc))
	client.publish("device1/status",payload="Online", qos=0, retain=True)

client = mqtt.Client()
client.on_connect = on_connect
client.will_set("device1/status", payload="Offline", qos=0, retain=True)
client.connect("iot.eclipse.org", 1883, 60)
client.loop_forever()
