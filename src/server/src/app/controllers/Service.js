import jwt from 'jsonwebtoken';
import Service from '../models/Service.js';

export const createService = async (req, res) => {
  const { desc, dateTime, rooms, value, address } = req.body;

  if (!desc || !dateTime || !rooms || !value || !address.cep) {
    return res.status(400).json('Preencha os campos obrigatórios');
  }

  const { telefone } = jwt.verify(req.headers.token, process.env.JWT_SECRET);

  const service = await Service.save(req.body, telefone);

  res.status(201).json(service);
};
