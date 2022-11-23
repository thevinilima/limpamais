const jwt = require('jsonwebtoken');

const User = require('../services/User');

exports.ensureAuthenticated = async (req, res, next) => {
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
};
