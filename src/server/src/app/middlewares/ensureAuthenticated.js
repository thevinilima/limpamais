import jwt from 'jsonwebtoken';
import User from '../services/User.js';

export async function ensureAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({
      error: 'Não autorizado',
    });

  const parts = authorization.split(' ');

  if (parts.length !== 2)
    return res.status(401).json({
      error: 'Não autorizado',
    });

  const [name, token] = parts;

  if (!/^Bearer$/.test(name))
    return res.status(401).json({
      error: 'Não autorizado',
    });

  try {
    const { telefone } = jwt.verify(token, process.env.JWT_SECRET);
    if (!(await User.getByTel(telefone)))
      return res.status(401).json({
        error: 'Não autorizado',
      });
  } catch (err) {
    return res.status(401).json({
      error: 'Não autorizado',
    });
  }

  return next();
}
