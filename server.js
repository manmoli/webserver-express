const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//cuando se hace una peticion desde el navegador se ejecuta la renderizacion de la pagina home y 
//se le pasan los parámetros nombre y anio
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Manuel',
        anio: new Date().getFullYear()
    });
});

//para renderizar una segunda página enlazada a la primera
app.get('/about', (req, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log('Escuchando en el puerto 3000')
});