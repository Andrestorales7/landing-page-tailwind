import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Category from '../../../lib/models/category.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const category = await Category.create(req.body);
        res.status(201).json({ success: true, data: category });
      } catch (error: any) {
        console.error('Error al crear categoría:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'GET':
      try {
        const categories = await Category.find({});
        res.status(200).json({ success: true, data: categories });
      } catch (error: any) {
        console.error('Error al obtener categorías:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}