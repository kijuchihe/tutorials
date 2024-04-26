# What is the internet?

The internet is made of hundreds of thousands of networks, and billions of devices and computers connected physically. These different computers, connect to each other, communicate with each and collaborate with each other because of the agreed upon standards for how data is sent arount the internet.

## HOW DOES DATA TRAVEL

You might think you make a request directly to spotify servers, and spotify sends you a song on a direct dedicated line. That is not how it works
If the internet were made of direct dedicated connections, it will be impossible to keep things working as billions of users join as there is no guarantee that every wire in the computer is working all the time. Data travels on the internet in a much less direct fashion.

The way information gets transferred is pretty interesting. It need not follow a fixed path and your path may change in a computer to computer conversation. Information on the internet goes from one computer to another in what we call a packet of information. A packet travels from one place to another on the internet a lot like how you might get from one place to another in a car. Depending on traffic congestion or road conditions, you might choose or be forced to take a different route to get to the same place each time you travel.

Many kinds of digital information can be sent with IP packets but there are some limits. If for example you want to move a space shuttle from one place to another. It cannot fit into a truck so you will break it down to different trucks which might take different paths and might get to the destinations at different times but once all the pieces are there, you can re-assemble it. Similar to that, if you have a large image you want to send or upload to a website, that image might be made up of tens of millions of bits (1 and 0) that are too many to be sent in one packet. Since you are sending data from the computer, the computer sending the image can break into hundreds of packets. Unlike trucks, packets don't have drivers and they don't choose their route.

Packets have the internet address of where it came from and where it is going.

Special computers on the internet called routers, act like traffic managers to keep the packet moving through the networks smoothly. If one route is congested individual packets may travel different routes through the internet and they may arrive at the destination at slightly different times or even out of order.

As part of the internet protocol, each route keeps track of multiple paths for sending packets and it chooses the cheapest available path for each piece of data based on destination IP address for the packet.

Cheapest doesn't mean cost but time and non-technical factors like politics and relationships between companies. Often the best route for data to travel isn't necessarily the most direct.

Having multiple options for paths make the network fault tolerant which means the network can keep sending packets if something goes wrong. This is the basis of a key principle for the internet: Reliability.

## Requesting

What if you want to request some data and not everything is delivered. If you want to listen to a song, how can you be 100% sure that all the data will be delivered and the song plays perfectly. This introduces TCP

### Transmission Control Protocol

This manages the sending and receiving of all your data as packets
Think of it like a guaranteed mail service. When you request a song on your device, spotify sends songs broken into packets. When your packets arrive, TCP does a full inventory/check and sends back acknowledgement of each packet received. If all packets are there, TCP signs for your delivery and you're done. If TCP finds some packets are missing, it won't sign and for each incomplete or missing packet, the server will resend them
