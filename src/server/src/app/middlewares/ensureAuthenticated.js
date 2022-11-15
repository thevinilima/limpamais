import jsonwebtoken from 'jsonwebtoken';

export function ensureAuthenticated(request, response, next) {
  const { verify } = jsonwebtoken;
  const token = request.headers.token;

  if (!token) {
    return response.status(401).json({
      error: 'Não autorizado',
    });
  }

  try {
    verify(token.split(' ')[1], process.env.JWT_SECRET);
  } catch (err) {
    return response.status(401).json({
      error: 'Não autorizado',
    });
  }

  return next();
}
