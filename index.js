require('dotenv').config()

// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
const productRouter = require('./routes/products');
const app = express()

const port = process.env.PORT
// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//routes
app.use("/",productRouter);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
  