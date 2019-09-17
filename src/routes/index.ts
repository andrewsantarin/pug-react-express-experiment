import { RequestHandler, Router } from 'express';
import { cars } from './cars';
import { models } from './models';

export const routes = Router();

routes.use('/models', models);
routes.use('/cars', cars);

export const index: RequestHandler = (req, res, next) => {
  res.render('index', {
    title: 'Index',
  });
};

routes.get('/', index);
