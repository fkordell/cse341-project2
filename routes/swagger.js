const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const swaggerUiOptions = {
    swaggerOptions: {
      oauth2RedirectUrl: 'https://cse341-project2-h8z8.onrender.com/api-docs/oauth2-redirect.html',
      oauth: {
        clientId: 'uLkMoDSftuzSO9hW76bLyVdT5CrRNgdh',
        usePkceWithAuthorizationCodeGrant: true, 
      }
    }
  };
  
  router.use('/api-docs', swaggerUi.serve);
  router.get('/api-docs', swaggerUi.setup(swaggerDocument, swaggerUiOptions));

module.exports = router;