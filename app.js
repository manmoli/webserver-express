const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'manuel',
            edad: 27,
            url: req.url
        }

        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080 ');