import {createServer} from './index';

it('hello', () => {
  return createServer()
  .then((server) => {
    server.inject({
       method: 'GET',
       url: '/hello'
     }, (response) => {
       expect(response.payload).toContain('hello');
     });
  });
});
