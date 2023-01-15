import { Request, Response, NextFunction } from 'express';

export async function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> {
  try {
    if (!req.payload)
      return res.status(401).json({ message: 'Erro inesperado!' });

    if (!req.payload.isAdmin) {
      return res.status(401).json({
        message:
          'Oops... Para acessar essa rota, você precisa ser um administrador!',
      });
    }

    next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
}
