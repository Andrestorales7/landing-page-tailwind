// pages/api/products/[categoria]/[nombre].ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import Product from '../../../../lib/models/product.model';
import Category from '../../../../lib/models/category.model'; // Asegúrate de tener el modelo de Categoría

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categoria, nombre } = req.query;

  try {
    await dbConnect();

    if (!categoria || typeof categoria !== 'string' || !nombre || typeof nombre !== 'string') {
      return res.status(400).json({ success: false, error: 'Se deben proporcionar la categoría y el nombre del producto.' });
    }

    // Buscar la categoría por nombre (insensible a mayúsculas)
    const category = await Category.findOne({ name: { $regex: new RegExp(`^${categoria}$`, 'i') } });

    if (!category) {
      return res.status(404).json({ success: false, error: `Categoría "${categoria}" no encontrada.` });
    }

    // Buscar el producto por nombre (insensible a mayúsculas) dentro de la categoría encontrada
    const product = await Product.findOne({
      name: { $regex: new RegExp(`^${nombre}$`, 'i') },
      category: category._id,
    });

    if (!product) {
      return res.status(404).json({ success: false, error: `Producto "${nombre}" no encontrado en la categoría "${categoria}".` });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    console.error('Error al obtener el producto (API):', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor al obtener el producto.' });
  }
}