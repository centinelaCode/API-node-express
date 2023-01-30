const express = require('express');
const app = express();
const PORT = 3000;


// Route Home
app.get('/', (req, res) => {
   res.send('HOME')
})


// Route for all products
app.get('/products', (req, res) => {
   res.json(
      [
         {
            id: 1,
            name: 'Product 1',
            price: 1000
         },
         {
            id: 2,
            name: 'Product 2',
            price: 2002
         },
      ]
   )
})

// Route for one product
app.get('/products/:idProduct', (req, res) => {
   const { idProduct } = req.params;

   res.json({
      idProduct,
      name: 'Product 1',
      price: 1000
   })
})

// Route for all Categories
app.get('/categories', (req, res) => {
   res.json(
      [
         {
            id: 1,
            name: 'Categorie 1',
         },
         {
            id: 2,
            name: 'Categorie 2',
         },
      ]
   )
})

// Route for one Category
app.get('/categories/:idCategory', (req, res) => {
   const { idCategory } = req.params;
   res.json(
         {
            idCategory,
            name: 'Categorie 1',
         }
   )
})

// route for categories-products
app.get('/categories/:idCategory/products/:idProduct', (req, res) => {
   const { idCategory, idProduct } =req.params;
   res.json({
      idCategory,
      idProduct,
   })
})


// Route for all Users
app.get('/users', (req, res) => {
   res.json(
      [
         {
            id: 1,
            name: 'User 1',
            email: 'user1@correo.com'
         },
         {
            id: 2,
            name: 'User 2',
            email: 'user2@correo.com'
         },
      ]
   )
})

// Route for one User
app.get('/users/:idUser', (req, res) => {
   const {idUser} = req.params;
   res.json(
         {
            idUser,
            name: 'user#@correo.com',
         }
   )
})



app.listen(PORT, () => {
   console.log('Server run on Port ', PORT)
})
