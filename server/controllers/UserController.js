const {User} = require('../models');

const register = async (req, res) => {
    return res.status(200).json({message: "register"});
};


const login = async (req, res) => {
    return res.status(200).json({message: "login"});
};

const edit = async (req, res) =>{
    return res.status(200).json({message: "edit"});
};

const remove = async (req, res) =>{
    return res.status(200).json({message: "remove"});
}

const show = async (req, res) => {
    return res.status(200).json({message: "show"});
}


module.exports = {
    register,
    login,
    edit,
    remove,
    show
}