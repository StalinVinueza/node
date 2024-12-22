let express = require('express');
let cors = require('cors');

let app = express();

let puerto = 3000;

app.use(cors()); 

app.get('/numero-aleatorio', (req, res) => {
    let numeroAleatorio = Math.floor(Math.random() * 1_000_000) + 1;
    res.json({ numero: numeroAleatorio });
});




app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto: ' + puerto);
});