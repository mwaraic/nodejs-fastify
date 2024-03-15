import AutoLoad from '@fastify/autoload'
import Cors from '@fastify/cors'
import Fastify from 'fastify'
import { join } from 'desm'
import Swagger from './plugins/swagger.js'

const fastify = Fastify({
  logger: true
})

fastify.register(Cors, {
  origin: true, // Allow requests from any origin
});

// plugins 

Swagger(fastify);

// routes 

fastify.register(AutoLoad, {
  dir: join(import.meta.url, 'routes'),
  options: Object.assign({}, {}),
});

// Run the server!
fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
