import mongoose from 'mongoose';
import Schema from mongoose.Schema;

const productSchema = new Schema({
    nameProduc: String,
    price: Number,
    stock : Number
});

//Creando el modelo

const ProductMDB = mongoose.model('Product',productSchema);

module.exports = ProductMDB;