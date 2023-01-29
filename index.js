const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
   res.send('Route: Home /')
})

app.listen(PORT, () => {
   console.log('Server run on Port ', PORT)
})
