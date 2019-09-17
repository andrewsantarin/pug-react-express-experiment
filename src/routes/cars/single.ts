import { RequestHandler } from 'express';

export const single: RequestHandler = (req, res, next) => {
  res.render('cars', {
    data: req.body,
    title: 'Single Car',
    value: 'Single',
  });
};
