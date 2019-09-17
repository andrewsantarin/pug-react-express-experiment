import { RequestHandler } from 'express';

export const single: RequestHandler = (req, res, next) => {
  res.render('models', {
    data: req.body,
    title: 'Single Model',
    value: 'Single',
  });
};
