const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Sistema de Tarefas',
            version: '1.0.0',
            description: 'API para gerenciamento de tarefas'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: []
};

const specs = swaggerJsdoc(options);

module.exports = specs;