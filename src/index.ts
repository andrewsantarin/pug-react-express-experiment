import debug from 'debug';
import app from './app';

const log = debug('app');

const server = app.listen(app.get('port'));

/**
 * Event listener for HTTP server "error" event.
 */
const handleError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = app.get('port');
  const bind = `${typeof port === 'string' ? 'Pipe' : 'Port'} ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log('%s requires elevated privileges', bind);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log('%s is already in use', bind);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const handleListening = () => {
  const address = server.address();
  if (typeof address === 'string') {
    log('  %s', address);
  } else {
    log('%s:%s', address.address, address.port);
  }
  log(
    'App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  log('Press CTRL-C to stop.');
};

server.on('error', handleError);
server.on('listening', handleListening);

export default server;
