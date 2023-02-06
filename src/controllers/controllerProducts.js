import productMDB  from '../models/product';
import {Router} from 'express';
import productsRouteMDB from Router();


//Listar todos lor productos
productsRouteMDB.get('/', async(req, res)=>{
    try {
        const arrayProducts = await productMDB.find();
        res.json(arrayProducts);
        
    } catch (error) {
        console.log(error);
    }
});

//Crear producto nuevo
productsRouteMDB.post('/', async(req, res)=>{
    try {
        const { nameProduct, price, stock } = req.body;
    
        const newProduct = await productMDB.create({
          nameProduct, 
          price,
          stock
        });
    
        res.status(201).json({
          data: newProduct,
        })
      } catch (err) {
        res.status(500).json({
          error: err.message
        });
      }
});

//Delete product
productsRouteMDB.delete('/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        await productMDB.findByIdAndDelete(id);
        res.json({
          msg: 'product deleted!'
        })
      } catch (err) {
        res.status(500).json({
          error: err.message
        });
      }
});

//Update list of products
productsRouteMDB.put('/:id', async(req, res)=>{
  try {
    const { id } = req.params;
    const { nameProduct, price, stock } = req.body;

    const product = await productMDB.findById(id);
    if(!product)
      return res.status(404).json({
        msg: 'Product not found',
      });
    const productUpdated = await productMDB.findByIdAndUpdate(
      id,
      { nameProduct, price, stock },
      { new: true }
    );
    res.json({
      msg: 'Product updated',
      data: productUpdated
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
    
});





export default productsRouteMDB;