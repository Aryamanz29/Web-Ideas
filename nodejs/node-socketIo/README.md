# nodejs-socket.io-v2.0

## Features

Socket.IO enables real-time bidirectional event-based communication. It consists of:

- a Node.js server (this repository)
- a [Javascript client library](https://github.com/socketio/socket.io-client) for the browser (or a Node.js client)

Its main features are:

#### Reliability

#### Auto-reconnection support

#### Multiplexing support

#### Room support

## Installation

```
npm install socket.io
```
## Documentation

Please see the documentation [here](https://socket.io/docs/).

**Note:** Socket.IO is not a WebSocket implementation. Although Socket.IO indeed uses WebSocket as a transport when possible, it adds some metadata to each packet: the packet type, the namespace and the ack id when a message acknowledgement is needed. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a WebSocket server
