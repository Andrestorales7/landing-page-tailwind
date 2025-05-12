import mongoose, { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la categoría es requerido.'],
    unique: true,
    trim: true,
    maxlength: [200, 'El nombre de la categoría no puede tener más de 200 caracteres.'],
  },
  image: {
    type: String,
    required: [true, 'La URL de la imagen de la categoría es requerida.'],
    trim: true,
    maxlength: [2000, 'La URL de la imagen de la categoría no puede tener más de 2000 caracteres.'],
  },
});

const Category = models.Category || model('Category', CategorySchema);

export default Category;