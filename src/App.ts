import express, { Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nocache from 'nocache';

export class App1 {
  public express: express.Application;
  public port: string | 3000 = process.env.PORT || 3000;

  constructor(private routes: Router) {
    dotenv.config();
    this.express = express();
    this.middlewares();
  }

  public listen(): void {
    // this.database();

    // this.express.on('connectReady', () => {
    this.express.listen(this.port, () => {
      console.log('API Server listening on port ' + this.port);
    });
    // });
  }

  // private database(): void {}

  private middlewares(): void {
    this.express.use(express.json());

    this.express.use(
      cors({
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        origin: 'http://localhost:3001',
        allowedHeaders: ['authorization', 'Content-Type'], // you can change the headers
        exposedHeaders: ['authorization', 'X-Access-Token'], // you can change the headers
        preflightContinue: false,
      }),
    );
    this.express.use(
      helmet({
        contentSecurityPolicy: {
          directives: { frameAncestors: ["'self' http://localhost:3001"] },
        },
      }),
    );
    this.express.use(nocache());

    this.express.use(express.urlencoded({ limit: '20mb', extended: true }));
    this.express.use(express.static(path.resolve(__dirname, 'app', 'assets')));
    this.express.use(this.routes);

    this.express.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100,
      }),
    );
  }
}

export class App2 {
  public express: express.Application;
  public port: string | 3033 = process.env.TESTS_PORT || 3033;

  constructor(private routes: Router) {
    dotenv.config();
    this.express = express();
    this.middlewares();
  }

  public listen(): void {
    // this.database();

    // this.express.on('connectReady', () => {
    this.express.listen(this.port, () => {
      console.log('Server tests listening on port ' + this.port);
    });
    // });
  }

  // private database(): void {}

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(
      cors({
        methods: ['GET', 'POST'],
        origin: 'http://localhost:3001',
        allowedHeaders: ['authorization', 'Content-Type'], // you can change the headers
        exposedHeaders: ['authorization'], // you can change the headers
        preflightContinue: false,
      }),
    );
    this.express.use(
      helmet({
        contentSecurityPolicy: {
          directives: { frameAncestors: ["'self' http://localhost:3001"] },
        },
      }),
    );

    this.express.use(express.urlencoded({ limit: '20mb', extended: true }));
    this.express.use(express.static(path.resolve(__dirname, 'app', 'assets')));

    this.express.use(this.routes);

    this.express.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100,
      }),
    );
  }
}
