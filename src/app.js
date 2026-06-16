require('dotenv').config();
require('./database/init');

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./docs/swagger');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();
const taskRoutes =
require('./routes/taskRoutes');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Tarefas funcionando!'
    });
});

const PORT = process.env.PORT || 3000;
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs)
);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});