const server = require('./app');
let port = 3001

server.listen(port, function(){
    console.log(`Server is listing on port ${port}`)
})