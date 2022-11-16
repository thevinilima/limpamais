import jwt from 'jsonwebtoken';

export function ensureAuthenticated(request, response, next) {
  const { token } = request.headers;

  if (!token) {
    return response.status(401).json({
      error: 'Não autorizado',
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return response.status(401).json({
      error: 'Não autorizado',
    });
  }

  return next();
}
