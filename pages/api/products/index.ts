import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Product from '../../../lib/models/product.model';
import Category from '../../../lib/models/category.model'; // Importa el modelo de Categoría

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { categoryName, ...productData } = req.body;

        if (!categoryName) {
          return res.status(400).json({ success: false, error: 'Se debe proporcionar el nombre de la categoría (categoryName) para el producto.' });
        }

        const category = await Category.findOne({ name: { $regex: new RegExp(`^${categoryName}$`, 'i') } });

        if (!category) {
          return res.status(400).json({ success: false, error: `La categoría "${categoryName}" no existe.` });
        }

        const product = await Product.create({ ...productData, category: category._id });
        res.status(201).json({ success: true, data: product });
      } catch (error: any) {
        console.error('Error al crear producto:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'GET':
      try {
        const products = await Product.find({}).populate('category', 'name'); // Popula la información de la categoría (solo el nombre)
        res.status(200).json({ success: true, data: products });
      } catch (error: any) {
        console.error('Error al obtener productos:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}