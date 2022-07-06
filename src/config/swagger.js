import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { Guild } from '../api/models/Guild';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Workbench',
      version: '2.0.0'
    },
    basePath: '/',
    host: global.api_url,
    components: {
      schemas: {
        Guild,
      }
    }
  },
  produces: ['application/json'],
  consumes: ['application/json'],
  apis: ['dist/api/routes/*.js', 'dist/utils/responses.js']
};
const swaggerSpec = swaggerJSDoc(options);

export default app => {
  app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};