const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Events API',
    description: 'Events API'
  },
  host: 'cse341-project2-h8z8.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);