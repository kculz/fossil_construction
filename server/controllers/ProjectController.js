const { Op } = require('sequelize');
const {Project, User} = require('../models');


const index = async(req, res) => {

    try {

        const resi = await Project.findAll({
            include: [User]
        });
        
        return res.status(200).json({data: resi});

    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }

}

const create = async(req, res) => {
    try {
        const {userId} = req.user;

        const {title, desc, expectedStartDate, expectedCompletion, location } = req.body;

        await Project.create({
            title,
            desc,
            expectedStartDate,
            expectedCompletion,
            location,
            projectOwnerId: userId
        });

        return res.status(201).json({msg: 'Project created.'})
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error.')
    }
}


const show = async(req, res) => {
    
    const {userId} = req.user;

    try {
        const project = await Project.findAll({where: {
            projectOwnerId: userId
        }});

        if(project.length < 1){
            return res.status(404).json({msg: "No projects for User."});
        }
        return res.status(200).json({msg: "Data", code: 1, data: project});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }
}

const getProject = async(req, res) => {
    const {id} = req.params;

    try {
        const project = await Project.findByPk(id, {include: [User]});

        if(!project){
            return res.status(404).json({msg: "Resource not found."});
        }
        
        return res.status(200).json({msg: "data", data: project});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }
}

const edit = async(req, res) => {

    const {id} = req.params;

    try {
        const {title, desc, expectedStartDate, expectedCompletion,location, isApproved, status, price, isPaid} = req.body;

        const projectExist = await Project.findByPk(id);
        if(!projectExist){
            return res.status(404).json({msg: "Project not found."})
        }

        projectExist.title = title;
        projectExist.desc = desc;
        projectExist.expectedStartDate = expectedStartDate;
        projectExist.expectedCompletion = expectedCompletion;
        projectExist.location = location;
        projectExist.isApproved = isApproved;
        projectExist.status = status;
        projectExist.price = price;
        projectExist.isPaid = isPaid;

        await projectExist.save()
        console.log(projectExist)

        return res.status(200).json({msg: "Projects", data: projectExist});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }


}


const remove = async(req, res) => {

    return res.status().json();
}

module.exports = {
    index,
    create,
    show,
    edit,
    remove,
    getProject
}