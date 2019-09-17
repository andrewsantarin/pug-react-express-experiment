import compression from 'compression';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import expressSession from 'express-session';
import createError from 'http-errors';
import lusca from 'lusca';
import morgan from 'morgan';
import path from 'path';
import serveFavicon from 'serve-favicon';

import { routes } from './routes';

// Setup configuration.
dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.set('port', port || 3000);
app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'ejs');

app.use(serveFavicon(path.join(__dirname, 'public', 'favicons', 'favicon.ico')));
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
  resave: true,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
}));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(lusca.nosniff());
app.use(lusca.referrerPolicy('same-origin'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// Catch 404 and forward to error handler.
app.use((_req, _res, next) => {
  next(createError({
    status: 404,
    title: 'Page Not Found',
  }));
});

// Catch 500 and render the error page.
app.use((err: any, req: any, res: any, _next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
