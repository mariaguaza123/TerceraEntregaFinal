import {Router} from 'express';
import productController from '../controllers/controllerProducts';
let newProductController = new productController();

const productsRoute = Router();

productsRoute.get('/', async(req, res)=>{
    let listOfProducts = await newProductController.getAllProducts();
    res.json(listOfProducts);
});

productsRoute.get('/:id',  async(req,res) =>{
    id = req.params.id;
    console.log(id);
    let findProduct = await newProductController.getByIdProducto(id);
    res.send(findProduct);
 });

 productsRoute.post('/',(req,res)=>{
    newProduct = newProductController.saveProduct(req);
    res.send(newProduct);
  });

  productsRoute.put('/:id',async (req,res)=> {
    let productUpdate = await newProductController.updateProduct(req);
    res.send(productUpdate);
 });

 productsRoute.delete('/:id',async (req,res)=> {
    let deleteProduct = await newProductController.deleteProduct(req);
    res.send(deleteProduct);
 });



 export default productsRoute;