import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      error: 'Unauthorized',
    });
  }

  try {
    verify(token.split(' ')[1], process.env.SECRET_JWT);
  } catch (err) {
    return response.status(401).json({
      error: 'Unauthorized',
    });
  }

  return next();
}