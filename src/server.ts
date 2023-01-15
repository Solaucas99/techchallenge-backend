import { App1, App2 } from './App';
import routes from './routes';
import test_routes from './test_routes';
new App1(routes).listen();
new App2(test_routes).listen();
