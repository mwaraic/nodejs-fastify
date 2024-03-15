import fastifySwagger from '@fastify/swagger';

export default async function (fastify) {
    
    fastify.register(fastifySwagger, {
        routePrefix: '/documentation',
        swagger: {
          info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost:3000',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json']
        },
        exposeRoute: true
      })

}