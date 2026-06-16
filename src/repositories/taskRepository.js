const db = require('../database/db');

const createTask = (
    titulo,
    descricao,
    userId,
    callback
) => {

    const sql = `
        INSERT INTO tasks
        (titulo, descricao, user_id)
        VALUES (?, ?, ?)
    `;

    db.run(
        sql,
        [titulo, descricao, userId],
        function(err) {
            callback(err, this.lastID);
        }
    );
};

const getTasks = (userId, callback) => {

    const sql = `
        SELECT *
        FROM tasks
        WHERE user_id = ?
    `;

    db.all(sql, [userId], callback);
};
const updateTask = (id, titulo, descricao, callback) => {

    const sql = `
        UPDATE tasks
        SET titulo = ?, descricao = ?
        WHERE id = ?
    `;

    db.run(sql, [titulo, descricao, id], function(err) {
        callback(err);
    });
};

const deleteTask = (id, callback) => {

    const sql = `
        DELETE FROM tasks
        WHERE id = ?
    `;

    db.run(sql, [id], function(err) {
        callback(err);
    });
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};