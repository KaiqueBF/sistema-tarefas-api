const authService = require('../services/authService');

const register = async (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            erro: 'Todos os campos são obrigatórios'
        });
    }

    authService.register(
        nome,
        email,
        senha,
        (err, id) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            return res.status(201).json({
                mensagem: 'Usuário criado com sucesso',
                id
            });
        }
    );
};

const login = (req, res) => {

    const { email, senha } = req.body;

    authService.login(
        email,
        senha,
        (err, token) => {

            if (err) {
                return res.status(401).json({
                    erro: err.message
                });
            }

            return res.json({
                token
            });
        }
    );
};

module.exports = {
    register,
    login
};