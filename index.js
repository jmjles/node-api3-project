// code away!
const server = require('./server')

const Port = process.env.PORT || 5000;
server.listen(Port, () => console.log(`Server runnning on Port: ${Port}`));