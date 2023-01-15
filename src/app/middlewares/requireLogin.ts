import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserPayload } from 'src/types/express';

interface RequestParams {
  [key: string]: any;
}

interface ResponseBody {
  [key: string]: any;
}

interface RequestBody {
  [key: string]: any;
}

interface RequestQuery {
  [key: string]: any;
}

export async function requireLogin<T>(
  req: Request<RequestParams, ResponseBody, RequestBody, T | RequestQuery>,
  res: Response,
  next: NextFunction,
): Promise<void | Response> {
  try {
    const header: string[] | undefined = req.headers.authorization?.split(',');
    const idToken = header
      ? header[0].replace('Bearer ', '').replaceAll('"', '')
      : undefined;
    if (!idToken)
      return res
        .status(401)
        .json({ message: 'Dados inválidos, tente fazer login novamente' });

    jwt.verify(idToken, process.env.JWT_KEY as string, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: err.message });
      }

      if (decoded !== undefined) {
        req.payload = decoded as UserPayload;

        next();

        return decoded;
      }

      return res
        .status(401)
        .json({ message: 'Um erro ocorreu ao decodificar o token!' });
    });
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
}
