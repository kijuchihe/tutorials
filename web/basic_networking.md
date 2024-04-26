# Basic Networking

Networking is the way computers exchange information around the world
Its architecture is abstracted into seven layers based on the Open Systems Interconnection Module

At the bottom, we have physical hardware like fibre-optic cables that carry light from point A to B. This light travels all the way to the layer 7 (Application Layer) where it is transmitted directly in your consciousness in the form of pixels or vibrations. That is exactly what you do when we access data over the http. In addition to HTTP, there are many protocols on layer 7 like smtp for emails and ftp () for file transfers

The Open Systems Interconnection (OSI) model describes seven layers that computer systems use to communicate over a network. The modern internet is based on a simpler TCP/IP (4 broad layers(App layer, Transport Layer, Internet, Network Access))

Seven Layers:

1. Physical Layer: Transmits raw bits stream over the physical medium
2. Data Link Layer: Defines the format of data on the network. This connects one physical node in the network to another via protocols like ethernet or wifi.
3. Network layer: Decades which physical path the data will take. It's here we find the Internet Protocol. Every computer has an IP Address and data is sent from the computer in the form of IP Packets that contains the IP address of where it is coming from in the header. A packet is a unit of data along with who sent it and where it is going to. This happens from a router or gateway which connects to layer 2.
4. Transport layer: Transmits data using transmission protocols including TCP & UDP (Transmission Control and User Datagram Protocol). The TCP is the foundation for pretty much everything we've looked at so far. It's job is to take a stream of data from one computer and transfer it to another. It determines how to segment the data into smaller pieces that can be sent over the network in the correct order. It receives the data from layer 3 (the network layer) in the form of packets.
5. Session Layer: Maintains connections and controls points and sessions. This is responsible for managing the connection between two computers. It is here we have user authentication and user authorisation to control whether or not a user has access to data on a server.
6. Presentation Layer: Ensures that data is in a usable form and is where data encryption occurs. It works as a translator to ensure that a stream of bits from a computer like a jpeg image is encoded to a standard format that can be used at the application layer.
7. Application layer: Human-computer interaction layer, where aplications can access the network scene
