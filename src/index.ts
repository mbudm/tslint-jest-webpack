import * as Hapi from 'hapi';

export function createServer(): Promise<Hapi.Server> {
    return new Promise((resolve) => {
        // Create a server with a host and port
        const server = new Hapi.Server();
        server.connection({
            host: 'localhost',
            port: 8000
        });

        // Add the route
        server.route({
            method: 'GET',
            path:'/hello',
            handler: function(request: Hapi.Request, reply: Hapi.IReply) {
                return reply('hello world');
            }
        });
        resolve(server);
      });
}

if(require.main == module){
  createServer()
  .then((server) => {
    server.start((err: Error) => {
        if (err) {
          server.log(['error'], {
              requestId: 'START_SERVER',
              message: err.message,
              stack: err.stack
          });
        }
        server.log([], 'Server running at: ' + server.info.uri);
    });
  })
}
