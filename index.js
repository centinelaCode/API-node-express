const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
   res.send('Route: Home -> /')
})
app.get('/nueva-ruta', (req, res) => {
   res.send('Route: NuevaRuta -> /nueva-ruta')
})
app.get('/products', (req, res) => {
   res.json(
      {
         name: 'Product 1',
         price: 1000
      }
   )
})

app.listen(PORT, () => {
   console.log('Server run on Port ', PORT)
})
