const db = require('../database/db');

const createUser = (nome, email, senha, callback) => {
    const sql = `
        INSERT INTO users (nome, email, senha)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [nome, email, senha], function(err) {
        callback(err, this.lastID);
    });
};

const findByEmail = (email, callback) => {

    const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

    db.get(sql, [email], (err, row) => {
        callback(err, row);
    });
};

module.exports = {
    createUser,
    findByEmail
};