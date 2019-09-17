import { Router } from 'express';
import { all } from './all';
import { single } from './single';

export const cars = Router();

cars.param('carId', (req, res, next, value, name) => {
  req.body = {
    value,
  };

  next();
});

cars.get('/', all);
cars.get('/:carId', single);
