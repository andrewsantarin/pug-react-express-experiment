import { RequestHandler } from 'express';

declare module 'express-slash' {
  export default function expressSlash(statusCode?: number): RequestHandler
}
