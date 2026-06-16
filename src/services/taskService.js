const taskRepository = require(
    '../repositories/taskRepository'
);

const createTask = (
    titulo,
    descricao,
    userId,
    callback
) => {

    taskRepository.createTask(
        titulo,
        descricao,
        userId,
        callback
    );
};

const getTasks = (
    userId,
    callback
) => {

    taskRepository.getTasks(
        userId,
        callback
    );
};
const updateTask = (
    id,
    titulo,
    descricao,
    callback
) => {

    taskRepository.updateTask(
        id,
        titulo,
        descricao,
        callback
    );
};

const deleteTask = (
    id,
    callback
) => {

    taskRepository.deleteTask(
        id,
        callback
    );
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};