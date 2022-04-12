const EventEmitter = require('events')
const event = new EventEmitter()
event.once('fire', () => {
    console.log('Event is fired');
  })
  event.addListener('open', () => {
    console.log('Event is opened');
  })
event.emit('fire');
event.emit('open');
console.log(event.eventNames());
console.log(event.getMaxListeners());
console.log(event.listeners('open'));
event.emit('fire');
event.setMaxListeners(50)
console.log(event.getMaxListeners())