import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import Product from '../../../../lib/models/product.model';
import Category from '../../../../lib/models/category.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categoria } = req.query;

  try {
    await dbConnect();

    if (!categoria) {
      return res.status(400).json({ success: false, error: 'Se debe proporcionar el nombre de la categoría.' });
    }

    const categoryDoc = await Category.findOne({ name: { $regex: new RegExp(`^${categoria}$`, 'i') } });

    if (!categoryDoc) {
      return res.status(404).json({ success: false, error: `Categoría "${categoria}" no encontrada.` });
    }

    const products = await Product.find({ category: categoryDoc._id });

    res.status(200).json({ success: true, data: products });
  } catch (error: any) {
    console.error('Error al obtener productos por categoría (API):', error);
    res.status(500).json({ success: false, error: error.message });
  }
}