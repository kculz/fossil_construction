const {User} = require('../models');
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    const {fullname,email, username, password} = req.body;

     try {
        const userExist = await User.findOne({where: {username}});

        if(userExist){
            return res.status(409).json({msg: "Username already exists."});
            
        }

        await User.create({ fullname, email, username, password});

        return res.status(200).json({msg: "User registered."})

     } catch (error) {
         res.status(500).json({error: "Internal server error."});
     }
};


const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const userExist = await User.findOne({where: {username}});

        if(!userExist){
            return res.status(404).json({msg: "Invalid credentials", code: 0});
        }

        if(password != userExist.password){
            return res.status(404).json({msg: "Invalid credentials", code: 0});
        }

        const token = jwt.sign({
            userId: userExist.id,
            isAdmin: userExist.isAdmin
        }, process.env.JWT_SECRET, {expiresIn: "1d"});

        return res.status(200).json({msg: `Welcome ${userExist.username}`, code: 1, token, id: userExist.id});

    } catch (error) {
        res.status(500).json({error: "Internal server error."});
    }
};

const edit = async (req, res) =>{
   const {id} = req.params;
   const {fullname, email, username, password} = req.body;

   try {

    const user = await User.findByPk(id);

    if(!user){
        return res.status(404).json({msg: "Resource not found."});
    }

    user.fullname = fullname;
    user.email = email;
    user.username = username;
    user.password = password;

    await user.save();

    res.status(200).json({msg: "Resource edited successfully."});
    
   } catch (error) {
    res.status(500).json({error: "Internal server error"});
   }
};

const remove = async (req, res) =>{
    const {id} = req.params;
    try {

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({msg: "Resource not found"});
        }

        await user.destroy();

        return res.status(200).json({msg: "Resource deleted successfully."});
        
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}

const show = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({msg: `User not found!`});
        }

        return res.status(200).json({msg: "found", data: user});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({err: "Internal server error"});
    }
}


module.exports = {
    register,
    login,
    edit,
    remove,
    show
}