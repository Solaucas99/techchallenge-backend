import * as express from 'express';

interface UserPayload {
  userId: string;
  email: string;
  username: string;
  isAdmin: boolean;
}

declare module 'express' {
  declare interface Request {
    payload?: UserPayload | void;
  }
}
