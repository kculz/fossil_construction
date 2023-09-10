const {Service} = require('../models');

const create = async (req, res) => {
    const {imageUrl, title, desc} = req.body;

    try {
        const titleExist = Service.findOne({where: {title}});

        if(titleExist){
            return res.status(409).json({msg: "Service already exists."});
        }

        await Service.create({title,desc, imageUrl});
        return res.status(200).json({msg: "Service created"});

    } catch (error) {
        return res.status(500).json({error: "Internal server error."});
    }
} 


const show = async (req, res) => {
    const {id} = req.params;
    try {
        const service = await Service.findByPk(id);

        if(!service){
            return res.status(404).json({msg: "Resource not found."});
        }

        return res.status(200).json({msg: "Resource found!", data: service});
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}  


const edit = async (req, res) => {
    const {id} = req.params;
    const {title, desc, imageUrl} = req.body;
    try {
        const service = await Service.findByPk(id);
        if(!service){
            return res.status(404).json({msg: "Resource not found."});
        }

        service.title = title;
        service.desc = desc;
        service.imageUrl = imageUrl;

        await service.save();

        return res.status(200).json({msg: "Resource edited sucessful."});

    } catch (error) {
        return res.status(500).json({error: "Internal server error."});
    }
}  


const remove = async (req, res) => {

    const {id} = req.params;

    try {
        const service = await Service.findByPk(id);

        if(!service){
            return res.status(404).json({msg: "Resource not found"});
        }

        await service.destroy();

        return res.status(200).json({msg: "Resource deleted successfully."})

    } catch (error) {
        return res.status(500).json({error: "Internal server error."})
    }
    
}  

const index = async (req, res) => {

   try {
    const service = Service.findAll();

    return res.status(200).json({msg: "Resource found.", data: service});

   } catch (error) {
    return res.status(500).json({error: "Internal server error"});
   }

}  



module.exports = {
    create,
    index,
    remove,
    edit,
    show
}
