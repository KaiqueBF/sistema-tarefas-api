const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/userRepository');

const register = async (nome, email, senha, callback) => {

    try {

        const senhaHash = await bcrypt.hash(senha, 10);

        userRepository.createUser(
            nome,
            email,
            senhaHash,
            callback
        );

    } catch (error) {
        callback(error);
    }
};

const login = (email, senha, callback) => {

    userRepository.findByEmail(email, async (err, user) => {

        if (err) {
            return callback(err);
        }

        if (!user) {
            return callback({
                message: 'Usuário não encontrado'
            });
        }

        const senhaValida = await bcrypt.compare(
            senha,
            user.senha
        );

        if (!senhaValida) {
            return callback({
                message: 'Senha inválida'
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        callback(null, token);
    });
};

module.exports = {
    register,
    login
};