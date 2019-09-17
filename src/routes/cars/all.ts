import { RequestHandler } from 'express';

export const all: RequestHandler = (req, res, next) => {
  res.render('cars', {
    data: req.body,
    title: 'All Cars',
    value: 'All',
  });
};
