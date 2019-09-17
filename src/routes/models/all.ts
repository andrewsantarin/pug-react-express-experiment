import { RequestHandler } from 'express';

export const all: RequestHandler = (req, res, next) => {
  res.render('models', {
    data: req.body,
    title: 'All Models',
    value: 'All',
  });
};
