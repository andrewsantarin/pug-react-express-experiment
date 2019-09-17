import { Router } from 'express';
import { all } from './all';
import { single } from './single';

export const models = Router();

models.param('modelId', (req, res, next, value, name) => {
  req.body = {
    value,
  };

  next();
});

models.get('/', all);
models.get('/:modelId', single);
