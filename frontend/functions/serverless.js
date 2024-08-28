// frontend/functions/serverless.js

const server = require('./server');  // Importa la app express desde server.js
const serverless = require('serverless-http');

module.exports.handler = serverless(server);
