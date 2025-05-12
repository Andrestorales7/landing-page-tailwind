import mongoose, { Schema, model, models, Types } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del producto es requerido.'],
    trim: true,
    maxlength: [200, 'El nombre del producto no puede tener más de 200 caracteres.'],
  },
  image: {
    type: String,
    required: [true, 'La URL de la imagen del producto es requerida.'],
    trim: true,
    maxlength: [2000, 'La URL de la imagen del producto no puede tener más de 2000 caracteres.'],
  },
  description: {
    type: String,
    required: [true, 'La descripción del producto es requerida.'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'La categoría del producto es requerida.'],
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;