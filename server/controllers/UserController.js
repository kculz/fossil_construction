const {User} = require('../models');

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
            return res.status(404).json({msg: "Invalid credentials"});
        }

        if(password != userExist.password){
            return res.status(404).json({msg: "Invalid credentials"});
        }

        return res.status(200).json({msg: `Welcome ${userExist.username}`});

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
    return res.status(200).json({msg: "show"});
}


module.exports = {
    register,
    login,
    edit,
    remove,
    show
}