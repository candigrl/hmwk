const http = ('http');
// require myServer.js
const PORT = 8080;
const server = http.createServer((request, response) => {

});

server.listen(PORT, () => console.log('Server is listening on port ${PORT}'));

$node =myServer.js

http.createServer((request, response) => {response.end('/Hello!');
});

http.createServer((request, response) => {
    if (request.url === '/good')
    {
        response.end('good world after all./');
    } else {
        // any other route...
    }
});

   
 

