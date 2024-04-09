import {testRouter} from '../routes/testRouter.js';
import {toursRouter} from '../routes/toursRouter.js';
import {errorHandler} from '../middleware/errorHandler.js';

export function startRoutes(app) {
  app.use('/api/v1/test', testRouter);
  //TODO: Everyone creates their own routes
  app.use('/api/v1/tours', toursRouter);
  app.use(errorHandler);
}
