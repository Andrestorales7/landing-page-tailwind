import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    console.log('Conexión a MongoDB exitosa');
    res.status(200).json({ message: 'Conexión a MongoDB establecida correctamente' });
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    res.status(500).json({ error: 'No se pudo conectar a la base de datos' });
  }
}