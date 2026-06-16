const taskService = require('../services/taskService');

const createTask = (req, res) => {

    const { titulo, descricao } = req.body;

    const userId = req.user.id;

    taskService.createTask(
        titulo,
        descricao,
        userId,
        (err, id) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Tarefa criada',
                id
            });
        }
    );
};

const getTasks = (req, res) => {

    const userId = req.user.id;

    taskService.getTasks(
        userId,
        (err, tasks) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json(tasks);
        }
    );
};
const updateTask = (req, res) => {

    const { id } = req.params;
    const { titulo, descricao } = req.body;

    taskService.updateTask(
        id,
        titulo,
        descricao,
        (err) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Tarefa atualizada'
            });
        }
    );
};

const deleteTask = (req, res) => {

    const { id } = req.params;

    taskService.deleteTask(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Tarefa removida'
            });
        }
    );
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};