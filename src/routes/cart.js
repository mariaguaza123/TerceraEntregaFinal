import { uuidv4 } from 'uuid';
import productController from'../controllers/controllerProducts';
let listProductsController = new productController();

export default class controllerCart{

    constructor(){
        this.cart = [];
    }

    myCartShopping = async(req)=> {
        console.log('pasando por get products');
            if(this.cart == null|| this.cart.length == 0){
                return  `El carrito esta vacio, agrega un producto a este carrito`;
            }
            const cartShoppingFinal = {
                id: uuidv4(),
                timeStamp : new Date(),
                products: this.cart
            }
            return cartShoppingFinal;
        
    }

    addProductToCart = async(id) =>{
        let findProduct = await listProductsController.getByIdProducto(id);
        const cartProductsShopping = {
            product : findProduct
        }
        this.cart.push(cartProductsShopping);
        return cartProductsShopping;
    }

    deleteProductOfCart =async(req)=>{
        const id = req.params.id;
        console.log(id);
        const products = this.cart
        const index = products.findIndex(aProduct => aProduct.id == id);
        products.splice(index,1);
        return this.cart;
    }

    deleteAllProductsOfCart = async()=>{
        const products = this.cart;
        products.splice(products);
        return 'Se vacio el carrito de compras, agregue productos si desea comprar';
    }


    
}