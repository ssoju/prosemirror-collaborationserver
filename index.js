
const io = require("socket.io");
var config = require('./config.js')

var events = require('./app/events/events.js')
const server = io.listen(config.port);

server.of(/^\/dynamic-\d+$/).on("connection", events)
